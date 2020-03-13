import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import './index.less'
export default class MsiteHeader extends Component {
  state = {
    isShow: false // 是否显示遮罩层和全部频道
  }

  toggleWrap = () => {
    const { isShow } = this.state
    this.setState({
      isShow: !isShow
    })
  }

  render() {
    const { isShow } = this.state
    const tabs = [
      { title: '推荐' },
      { title: '居家生活' },
      { title: '服饰鞋包' },
      { title: '美食酒水' },
      { title: '个护清洁' },
      { title: '母婴亲子' },
      { title: '运动旅行' },
      { title: '数码家电' },
      { title: '全球特色' }
    ]

    return (
      <div>
        <div className="top_container">
          {/* <!-- 头部 --> */}
          <header className="header">
            <h1 className="logo">&nbsp;</h1>
            <div className="search">
              <i className="iconfont icon-sousuo"></i>
              <span className="search_name">搜索商品,共24027款好物</span>
            </div>
            <div className="login">登录</div>
          </header>

          {/* <!-- 头部导航 --> */}
          <div className="nav">
            <Tabs
              tabs={tabs}
              tabBarActiveTextColor="#DD1A21"
              tabBarInactiveTextColor="#333"
              tabBarUnderlineStyle={{
                borderColor: '#DD1A21',
                width: '50px',
                marginLeft: '14px'
              }}
              renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}
            ></Tabs>
            <i
              className={`iconfont icon-xiala toggleWrap ${isShow ? 'on' : ''}`}
              onClick={this.toggleWrap}
            ></i>
          </div>

          {/* <!-- 全部频道 --> */}
          <div
            className="all_channel"
            style={{ display: isShow ? 'block' : 'none' }}
          >
            <div className="all_channel_title">全部频道</div>
            <div className="all_channel_item_container">
              <div className="all_channel_item">推荐</div>
              <div className="all_channel_item">ws1</div>
              <div className="all_channel_item">ws2</div>
              <div className="all_channel_item">ws3</div>
              <div className="all_channel_item">ws4</div>
              <div className="all_channel_item">ws5</div>
              <div className="all_channel_item">ws6</div>
              <div className="all_channel_item">ws7</div>
              <div className="all_channel_item">ws8</div>
            </div>
          </div>

          {/* <!-- 遮罩层 --> */}
          <div
            className="mask"
            style={{ display: isShow ? 'block' : 'none' }}
            onClick={this.toggleWrap}
          ></div>
        </div>
      </div>
    )
  }
}
