import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Tabs } from 'antd-mobile'

import { getCategoriesLeftAsync } from '../../../redux/actions'
import './index.less'

@withRouter
@connect(state => ({ categoriesLeft: state.categoriesLeft.categoryL1List }), {
  getCategoriesLeftAsync
})
class CategoryLeftNav extends Component {
  state = {
    tabs: []
  }

  TabExample = () => {
    const { tabs } = this.state
    const { history, categoriesLeft, location } = this.props
    return (
      <div style={{ height: 520 }}>
        <Tabs
          tabs={tabs}
          tabBarPosition="left"
          tabDirection="vertical"
          tabBarUnderlineStyle={{
            position: 'absolute',
            border: 'none',
            borderLeft: '1px solid red',
            left: 0,
            width: '4px',
            backgroundColor: 'red'
          }}
          tabBarActiveTextColor="red"
          renderTabBar={props => (
            <Tabs.DefaultTabBar
              {...props}
              activeTab={
                +location.search.slice(location.search.indexOf('index') + 6)
              }
              page={tabs.length}
            />
          )}
          onTabClick={(tab, index) => {
            let path = `?categoryId=${categoriesLeft[index].id}&index=${index}`
            if (location.search !== path) {
              history.push('/category' + path)
            }
          }}
        ></Tabs>
      </div>
    )
  }

  componentDidMount() {
    this.props.getCategoriesLeftAsync().then(res => {
      // 给数组添加数据
      const tabsArr = [...this.state.tabs]
      res.categoryL1List.forEach(item => {
        tabsArr.push({ title: item.name, key: item.id })
      })
      // 更新状态
      this.setState({
        tabs: tabsArr
      })
    })
  }

  render() {
    return (
      // <!-- 左侧导航 -->
      <div className="classify_left_nav">
        <this.TabExample />
      </div>
    )
  }
}

export default CategoryLeftNav
