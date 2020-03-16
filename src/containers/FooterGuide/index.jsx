import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.less'
@withRouter
class FooterGuide extends Component {
  goTo = path => {
    return () => {
      const { location, history } = this.props
      location.pathname !== path && history.push(path)
    }
  }

  render() {
    const { pathname } = this.props.location
    return (
      <footer
        className="footer_guide"
        style={{
          display: pathname === '/search' || pathname === '/login' ? 'none' : ''
        }}
      >
        <div
          className={`guide_item ${
            pathname === '/msite' || pathname === '/tab' ? 'active' : ''
          }`}
          onClick={this.goTo('/msite')}
        >
          <span className="item_icon">
            <i className="iconfont icon-shouye"></i>
          </span>
          <span>首页</span>
        </div>
        <div
          className={`guide_item ${pathname === '/category' ? 'active' : ''}`}
          onClick={this.goTo('/category')}
        >
          <span className="item_icon">
            <i className="iconfont icon-fenlei"></i>
          </span>
          <span>分类</span>
        </div>
        <div
          className={`guide_item ${pathname === '/worthbuy' ? 'active' : ''}`}
          onClick={this.goTo('/worthbuy')}
        >
          <span className="item_icon">
            <i className="iconfont icon-bao"></i>
          </span>
          <span>值得买</span>
        </div>
        <div
          className={`guide_item ${pathname === '/cart' ? 'active' : ''}`}
          onClick={this.goTo('/cart')}
        >
          <span className="item_icon">
            <i className="iconfont icon-gouwuche"></i>
          </span>
          <span>购物车</span>
        </div>
        <div
          className={`guide_item ${pathname === '/personal' ? 'active' : ''}`}
          onClick={this.goTo('/personal')}
        >
          <span className="item_icon">
            <i className="iconfont icon-geren"></i>
          </span>
          <span>个人</span>
        </div>
      </footer>
    )
  }
}
export default FooterGuide
