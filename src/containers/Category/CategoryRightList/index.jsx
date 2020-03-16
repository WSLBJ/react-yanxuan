import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid } from 'antd-mobile'
import { getCategoriesRightAsync } from '../../../redux/actions'
import './index.less'

@withRouter
@connect(state => ({ categoriesRight: state.categoriesRight }), {
  getCategoriesRightAsync
})
class CategoryRightList extends Component {
  state = {}

  GridExample = () => (
    <Grid
      data={this.getCategoryItem()}
      itemStyle={{ height: '120px' }}
      hasLine={false}
      columnNum={3}
    />
  )
  // 获取右侧对应的数据
  getCategoryItem = () => {
    const {
      location: { search },
      categoriesRight
    } = this.props

    // search有值说明点击了左边导航
    if (search) {
      // 拿到传过来的index
      let params = +search
        .slice(1)
        .split('&')[1]
        .split('=')[1]
      // 在数组里查找
      let datas = categoriesRight[params]
      if (datas) {
        let res
        if (datas.categoryList) {
          res = datas.categoryList
        } else {
          res = datas.subCateList
        }
        res = res.map(item => ({ icon: item.wapBannerUrl, text: item.name }))
        return res
      }
    }

    // 初始化第一条数据
    if (categoriesRight[0]) {
      let init_data = categoriesRight[0].categoryList.map(item => ({
        icon: item.wapBannerUrl,
        text: item.name
      }))
      return init_data
    }
  }

  componentDidMount() {
    this.props.getCategoriesRightAsync()
  }

  render() {
    return (
      // <!-- 右侧内容 -->
      <div className="classify_right">
        <div className="top_img">
          <img src={require('./images/00.webp')} alt="" />
        </div>
        <div className="list_info" style={{ textAlign: 'center' }}>
          <this.GridExample />
        </div>
      </div>
    )
  }
}

export default CategoryRightList
