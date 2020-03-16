import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.less'

@connect(state => ({ user: state.user }), null)
class Cart extends Component {
  render() {
    return (
      <div className="carBox">
        <footer className="carFooter">
          <span className="left">购物车</span>
          <span className="right">领劵</span>
        </footer>
        <nav className="carNav">
          <ul className="nav_ul">
            <li>
              <i>·</i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i>·</i>
              <span>48小时快速退款</span>
            </li>
            <li>
              <i>·</i>
              <span>满88元免邮费</span>
            </li>
          </ul>
        </nav>
        <div className="carContent">
          <div className="carContent_car">
            <img src={require('./images/01.png')} alt="" />
            <p>去添加点什么吧</p>
          </div>
          <div
            className="btn"
            onClick={() => {
              this.props.history.replace('/login')
            }}
            style={{
              display:
                Object.keys(this.props.user).length > 0 ? 'none' : 'block'
            }}
          >
            登录
          </div>
        </div>
      </div>
    )
  }
}
export default Cart
