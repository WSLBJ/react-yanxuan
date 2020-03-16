import React, { Component } from 'react'
import { connect } from 'react-redux'

import PhoneLogin from './PhoneLogin'
import EmailLogin from './EmailLogin'
import LoginHeader from '../../components/LoginHeader'

import './index.less'

@connect(state => ({ user: state.user }), null)
class Login extends Component {
  state = {
    isLogin: 0, // 0代表是登录主页，1是手机号登录页，2是邮箱登录页
    hasError: false, // 是否有错误
    value: ''
  }

  changeLoginWay = code => {
    this.setState({
      isLogin: code
    })
  }

  componentDidMount() {
    const { user, history } = this.props
    if (Object.keys(user).length !== 0) {
      history.replace('/personal')
    }
  }

  render() {
    const { isLogin } = this.state
    return (
      <div className="login-container">
        {/* <!-- 首页 --> */}
        <div
          className="header"
          style={{
            display: isLogin === 0 ? 'block' : 'none'
          }}
        >
          {/* <!-- 头部 --> */}
          <LoginHeader title={'网易严选'} />
          {/* <!-- 背景logo --> */}
          <div className="login-banner">
            <img
              src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
              alt=""
            />
          </div>
          {/* <!-- 手机号快捷登录 --> */}
          <button
            className="phone-login"
            onClick={() => {
              this.changeLoginWay(1)
            }}
          >
            <i className="u-icon u-icon-loginPhone"></i>
            <span>手机号快捷登录</span>
          </button>
          {/* <!-- 邮箱账户登录 --> */}
          <button
            className="email-login"
            onClick={() => {
              this.changeLoginWay(2)
            }}
          >
            <i className="u-icon u-icon-loginMail"></i>
            <span>邮箱帐号登录</span>
          </button>
          {/* <!-- 微信qq微博 --> */}
          <div className="topic-footer">
            {/* <!-- 微信 --> */}
            <button className="footer-weixin">
              <i className="icon icon-weixin"></i>
              <span>微信</span>
            </button>
            {/* <!-- qq --> */}
            <button className="footer-qq">
              <i className="icon icon-qq"></i>
              <span>QQ</span>
            </button>
            {/* <!-- 微博 --> */}
            <button className="footer-weibo">
              <i className="icon icon-weibo"></i>
              <span>微博</span>
            </button>
          </div>
        </div>

        {/* 手机号快捷登录 */}
        <div
          className="phone_login"
          style={{
            display: isLogin === 1 ? 'block' : 'none'
          }}
        >
          <PhoneLogin />
        </div>

        {/* 邮箱账号登录 */}
        <div
          className="email_login"
          style={{
            display: isLogin === 2 ? 'block' : 'none'
          }}
        >
          <EmailLogin />
        </div>
      </div>
    )
  }
}

export default Login
