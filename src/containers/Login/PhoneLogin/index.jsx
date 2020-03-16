import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Toast } from 'antd-mobile'

import { reqSendCode, reqSmsLogin } from '../../../api'
import { saveUser } from '../../../redux/actions'
import LoginHeader from '../../../components/LoginHeader'
import './index.less'

@withRouter
@connect(null, { saveUser })
class PhoneLogin extends Component {
  // 受控组件收集表单数据
  state = {
    phone: '', //手机号码
    captcha: '', // 验证码
    isRightPhone: false, //手机号是否正确
    isRightCaptcha: false, //验证码是否正确
    isFocusPhoned: false, // 手机号输入框是否获取过焦点
    isFocusCaptcha: false, // 手机号输入框是否获取过焦点
    captchaTxt: '获取验证码'
  }

  handleChange = key => {
    return e => {
      let { isRightPhone, isRightCaptcha } = this.state
      if (key === 'phone') {
        // 验证手机号
        let phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/
        isRightPhone = phoneReg.test(+e.target.value)
      } else if (key === 'captcha') {
        // 验证验证码
        let captchaReg = /^\d{6}$/
        isRightCaptcha = captchaReg.test(e.target.value)
      }

      this.setState({
        [key]: e.target.value,
        isRightPhone,
        isRightCaptcha
      })
    }
  }

  // 获取验证码
  getCaptcha = async () => {
    clearInterval(this.intervalId)
    // 开始计时
    this.computeTime = 30
    this.intervalId = setInterval(() => {
      this.computeTime--
      this.setState({
        captchaTxt: `已发送(${this.computeTime}s)`
      })
      if (this.computeTime <= 0) {
        this.computeTime = 0
        this.setState({
          captchaTxt: '重新发送'
        })
        clearInterval(this.intervalId)
      }
    }, 1000)

    // 发送请求,向指定手机号发短信验证码
    const result = await reqSendCode(this.state.phone)
    if (result === 'success') {
      Toast.success('验证码发送成功', 3)
    } else {
      Toast.fail('验证码发送失败', 3)
      // 停止计时
      this.computeTime = 0
    }
  }

  // 防止用户在发送验证码期间离开此页面
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  // 检查登录
  checkLogin = () => {
    const { history } = this.props
    const { isRightPhone, isRightCaptcha, phone, captcha } = this.state
    if (isRightPhone && isRightCaptcha) {
      // 发送请求，短信登录
      reqSmsLogin({ phone, code: captcha })
        .then(user => {
          // 保存用户信息
          this.props.saveUser(user)
          // 跳转页面
          history.replace('/personal')
        })
        .catch(msg => {
          Toast.fail(msg, 3)
        })
      // 停止计时
      this.computeTime = 0
      // 清空短信验证码的文本框
      this.setState({
        captcha: ''
      })
    }
  }

  render() {
    const {
      phone,
      captcha,
      isRightPhone,
      isRightCaptcha,
      isFocusPhoned,
      isFocusCaptcha,
      captchaTxt
    } = this.state
    return (
      <div className="phone_container">
        <LoginHeader title={'网易严选'} />
        <div className="banner_logo">
          <img
            src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
            alt=""
          />
        </div>
        <form>
          {/* 手机号码输入框 */}
          <div className="phone_input">
            <input
              type="tel"
              value={phone}
              onChange={this.handleChange('phone')}
              maxLength="11"
              onFocus={() => {
                this.setState({
                  isFocusPhoned: true
                })
              }}
            />
            <span
              className="errorMsg"
              style={{
                display: isRightPhone
                  ? 'none'
                  : isFocusPhoned
                  ? 'block'
                  : 'none'
              }}
            >
              {phone ? '您输入的手机号码有误' : '请输入手机号码'}
            </span>
            <span
              style={{ display: phone ? 'block' : 'none' }}
              onClick={() => {
                this.setState({
                  phone: '',
                  isRightPhone: false
                })
              }}
            >
              X
            </span>
          </div>
          {/* 短信验证码输入框 */}
          <div className="msg_input">
            <input
              type="tel"
              value={captcha}
              onChange={this.handleChange('captcha')}
              maxLength="6"
              onFocus={() => {
                this.setState({
                  isFocusCaptcha: true
                })
              }}
            />
            <button
              disabled={this.computeTime > 0 ? true : false}
              className="get_msg_code"
              onClick={e => {
                e.preventDefault()
                isRightPhone && this.getCaptcha()
              }}
            >
              {captchaTxt}
            </button>
            <span
              className="captcha_error_msg errorMsg"
              style={{
                display: isRightCaptcha
                  ? 'none'
                  : isFocusCaptcha
                  ? 'block'
                  : 'none'
              }}
            >
              验证码错误
            </span>
          </div>
          <div className="problem">
            <span>遇到问题?</span>
            <span>使用密码验证登录</span>
          </div>
          <button
            type="submit"
            className="goto_login"
            onClick={e => {
              e.preventDefault()
              this.checkLogin()
            }}
          >
            登录
          </button>
          <div className="service">
            <input type="checkbox" name="agreed" defaultChecked />
            <span>我同意</span>
            <span>《服务条款》</span>
            <span>和</span>
            <span>《网易隐私政策》</span>
          </div>
        </form>
        {/* 其他登录方式 */}
        <div className="other_login">
          <span>其他登录方式</span>
          <i></i>
        </div>
      </div>
    )
  }
}

export default PhoneLogin
