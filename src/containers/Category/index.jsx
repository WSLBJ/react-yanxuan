import React, { Component } from 'react'
import CategoryLeftNav from './CategoryLeftNav'
import CategoryRightList from './CategoryRightList'
import { Icon } from 'antd-mobile'
import './index.less'

export default class Category extends Component {
  render() {
    return (
      <div className="classifyBox">
        <header className="search">
          <div
            className="search_outer"
            onClick={() => {
              this.props.history.push('/search')
            }}
          >
            <Icon type="search" size="xs" className="a_icon" />
            <span>搜索商品, 共23602款好物</span>
          </div>
        </header>

        {/* <!-- 内容 --> */}
        <div className="classify_content">
          <CategoryLeftNav />
          <CategoryRightList />
        </div>
      </div>
    )
  }
}
