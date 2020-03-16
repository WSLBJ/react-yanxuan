import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSearchShopAsync } from '../../../redux/actions'
import { Grid } from 'antd-mobile'

import './index.less'
@connect(state => ({ searchShop: state.searchShop }), {
  getSearchShopAsync
})
class SearchShopList extends Component {
  GridExample = () => (
    <Grid
      data={this.getShopList()}
      itemStyle={{ height: '200px' }}
      hasLine={false}
      columnNum={2}
    />
  )

  // 过滤出商品
  getShopList = () => {
    const { searchShop } = this.props
    const { search } = this.props.location
    // decodeURI()对地址栏中的汉字解码
    let keyword = decodeURIComponent(search)
      .slice(1)
      .split('=')[1]
    let res = searchShop.filter(item => item.name.indexOf(keyword) !== -1)
    res = res.map(item => ({ icon: item.icon, text: item.name }))
    return res
  }

  componentDidMount() {
    const { getSearchShopAsync } = this.props
    // 发送请求获取商品列表
    getSearchShopAsync()
  }

  render() {
    return (
      <div className="shop_list_container">
        <this.GridExample />
      </div>
    )
  }
}
export default SearchShopList
