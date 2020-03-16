import React, { Component } from 'react'
import LoginHeader from '../../../components/LoginHeader'
import './index.less'
export default class EmailLogin extends Component {
  render() {
    return (
      <div className="email_container">
        <LoginHeader title={'网易严选'} />
        <div className="banner_logo">
          <img
            src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png"
            alt=""
          />
        </div>
        <form>
          {/* 手机号码输入框 */}
          <div className="email_input">
            <input
              type="text"
              placeholder="邮箱账号"
              className="email"
              autoFocus
            />
            <span>x</span>
          </div>
          {/* 密码输入框 */}
          <div className="pwd_input">
            <input
              type="password"
              placeholder="密码"
              className="pwd_code"
              autoFocus
            />
            <span>x</span>
          </div>
          <div className="problem">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <button className="goto_login" type="submit">
            登录
          </button>
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
