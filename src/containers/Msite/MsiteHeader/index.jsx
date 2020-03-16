import React, { Component } from 'react'
import { Tabs } from 'antd-mobile'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getNavAsync } from '../../../redux/actions'
import './index.less'

@withRouter
@connect(state => ({ nav: state.nav, user: state.user }), { getNavAsync })
class MsiteHeader extends Component {
  state = {
    isShow: false, // 是否显示遮罩层和全部频道
    tabs: [] // 导航栏标题
  }

  // 切换遮罩层的显示与隐藏
  toggleWrap = () => {
    const { isShow } = this.state
    this.setState({
      isShow: !isShow
    })
  }

  componentDidMount() {
    // 请求导航数据
    const { nav, getNavAsync } = this.props
    if (!nav.length) {
      getNavAsync().then(() => {
        const { nav } = this.props
        const tabsArr = [{ title: '推荐' }]
        //添加tab数据
        nav.forEach(item => {
          tabsArr.push({ title: item.name })
        })
        // 更新状态
        this.setState({
          tabs: tabsArr
        })
      })
    }
  }
  // 计算当前选中的导航下标
  toggleTabIndex = () => {
    const {
      nav,
      location: { search }
    } = this.props
    // 获取tabId
    const id = +search.slice(7)
    // 获取index
    let navIndex = nav.findIndex(item => item.id === id)
    navIndex = navIndex !== -1 ? navIndex + 1 : 0
    return navIndex
  }

  // 切换tab
  toggleTab = index => {
    const { nav, history } = this.props
    if (index !== 0) {
      history.push(`/tab?tabId=${nav[index - 1].id}`)
    } else {
      history.push('/msite')
    }
  }

  render() {
    const { isShow, tabs } = this.state
    const {
      history,
      location: { pathname }
    } = this.props
    return (
      <div>
        <div
          className="top_container"
          style={{
            display: pathname === '/msite' || pathname === '/tab' ? '' : 'none'
          }}
        >
          {/* <!-- 头部 --> */}
          <header className="header">
            <h1 className="logo">&nbsp;</h1>
            <div
              className={`search ${
                Object.keys(this.props.user).length !== 0 ? 'logined' : ''
              }`}
              onClick={() => {
                history.push('/search')
              }}
            >
              <i className="iconfont icon-sousuo"></i>
              <span className="search_name">搜索商品,共24027款好物</span>
            </div>
            <div
              className="login"
              style={{
                display:
                  Object.keys(this.props.user).length !== 0 ? 'none' : 'block'
              }}
            >
              登录
            </div>
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
              renderTabBar={props => (
                <Tabs.DefaultTabBar
                  {...props}
                  activeTab={this.toggleTabIndex()}
                  page={4}
                />
              )}
              onTabClick={(tab, index) => {
                this.toggleTab(index)
              }}
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
              {tabs.map((item, index) => (
                <div
                  className={`all_channel_item ${
                    this.toggleTabIndex() === index ? 'active' : ''
                  }`}
                  key={index}
                  onClick={e => {
                    // 跳转对应的页面
                    this.toggleTab(index)
                    // 隐藏全部频道和遮罩层
                    this.toggleWrap()
                  }}
                >
                  {item.title}
                </div>
              ))}
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

export default MsiteHeader
