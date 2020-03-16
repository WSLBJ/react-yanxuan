import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from '../Swiper'
import './index.less'

@connect(state => ({ nav: state.nav }))
class MsiteTab extends Component {
  // 过滤头部导航
  filterNav = () => {
    const {
      nav,
      location: { search }
    } = this.props
    const id = +search.slice(7)
    return nav.find(item => item.id === id) || []
  }

  render() {
    return (
      <div className="msite_tab_container">
        {/* <!-- 轮播图 --> */}
        <Swiper />

        {/* <!-- 主体区域 --> */}
        <div className="tab-main">
          {/* <!-- 主体头部区域 --> */}
          <div className="main-header">
            <span>热销爆款</span>
            <span>人气好物放心购</span>
          </div>

          {/* <!-- 主体内容区域 --> */}
          <div className="main-content">
            <ul className="content-list">
              {this.filterNav().subCateList &&
                this.filterNav().subCateList.map((item, index) => (
                  <li className="content-item" key={index}>
                    <img src={item.wapBannerUrl} alt="" />
                    <span>{item.frontName}</span>
                    <p>{item.frontDesc}</p>
                    <span className="item-price">￥45</span>
                    <span className="item-sale">满99减10</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MsiteTab
