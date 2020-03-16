import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getShopCategoriesAsync } from '../../../redux/actions'
import './index.less'

@connect(state => ({ shopCategories: state.shopCategories }), {
  getShopCategoriesAsync
})
class MsiteShopCategories extends Component {
  state = {
    shopCategories: []
  }

  componentDidMount() {
    this.props.getShopCategoriesAsync().then(res => {
      this.setState({
        shopCategories: res
      })
    })
  }

  render() {
    const { shopCategories } = this.state
    return (
      <div>
        <ul className="shop_categories">
          {shopCategories.map((item, index) => (
            <li className="shop_categories_item" key={index}>
              <img src={item.picUrl} alt="" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MsiteShopCategories
