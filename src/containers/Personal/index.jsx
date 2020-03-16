import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'antd-mobile'
import { deleteUser } from '../../redux/actions'

import './index.less'
@connect(state => ({ user: state.user }), { deleteUser })
class Personal extends Component {
  state = {
    data: Array.from(new Array(12)).map((_val, i) => ({
      icon:
        '//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/ucenter-sb8183bd0d2-821c53ac4e.png?imageView&type=webp',
      text: `name${i}`
    })),
    user: ''
  }

  GridExample = () => (
    <Grid
      data={this.state.data}
      itemStyle={{ height: '120px' }}
      hasLine={false}
      columnNum={3}
    />
  )

  componentDidMount() {
    const { history, user } = this.props
    if (Object.keys(user).length === 0) {
      history.replace('/login')
    }
  }

  // 退出登录
  logout = () => {
    // 清空localStorage
    localStorage.removeItem('user')
    // 清空redux中的user数据
    this.props.deleteUser()
    // 跳转到首页
    this.props.history.replace('/msite')
  }

  getPhone = () => {
    const { user } = this.props
    if (typeof user === 'string') {
      return JSON.parse(user).phone
    } else {
      return user.phone
    }
  }

  render() {
    return (
      <div className="profile-container">
        {/* <!-- 头部 --> */}
        <header className="profile-header">
          {/* <!-- 用户头像及号码 --> */}
          <div className="user">
            <img
              src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png"
              alt=""
            />
            <div className="phone">
              <span>{this.getPhone()}</span>
              <span>普通用户</span>
            </div>
          </div>
        </header>
        {/* <!-- 资产 --> */}
        <div className="profile-money">
          <div className="money-top">
            <span>我的资产</span>
          </div>
          <div className="van-hairline--bottom"></div>
          <div className="money-bottom">
            <ul className="money-bottom-list">
              <li className="money-bottom-item">
                <span>￥0</span>
                <img src="" alt="" />
                <span>回馈金</span>
              </li>
              <li className="money-bottom-item">
                <span>0</span>
                <span>红包</span>
              </li>
              <li className="money-bottom-item">
                <span>0</span>
                <span>优惠券</span>
              </li>
              <li className="money-bottom-item">
                <span>￥0</span>
                <span>津贴</span>
              </li>
              <li className="money-bottom-item">
                <span>0</span>
                <span>礼品卡</span>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- 主体信息 --> */}
        <div className="profile-userInfo">
          <this.GridExample />
        </div>
        {/* <!-- 退出登录 --> */}
        <div className="exitLogin">
          <Button
            onClick={e => {
              e.preventDefault()
              this.logout()
            }}
          >
            退出登录
          </Button>
        </div>
      </div>
    )
  }
}

export default Personal
