import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchBar } from 'antd-mobile'
import {
  getHotSearchAsync,
  getSearchShopAsync,
  saveHistoryScore,
  delHistoryScore
} from '../../redux/actions'

import { setItem, deleteItem } from '../../utils/Storage'
import './index.less'

@connect(
  state => ({
    hotSearch: state.hotSearch,
    searchShop: state.searchShop,
    historyScore: state.historyScore
  }),
  {
    getHotSearchAsync,
    getSearchShopAsync,
    saveHistoryScore,
    delHistoryScore
  }
)
class Search extends Component {
  state = {
    value: '', //搜索框的value值
    SearchList: [] // 搜索列表数据
  }

  componentDidMount() {
    const { getHotSearchAsync, getSearchShopAsync } = this.props
    // 搜索框获取焦点
    this.autoFocusInst.focus()
    // 获取搜索热门数据
    getHotSearchAsync()
    // 获取搜索商品数据
    getSearchShopAsync()
  }

  // 把搜索框中的值更新为状态
  handleChange = value => {
    const { searchShop } = this.props
    let res = searchShop.filter(item => item.name.indexOf(value) !== -1)

    this.setState({
      value,
      SearchList: res
    })
  }

  // 按下enter
  handleSubmit = () => {
    const { value } = this.state
    if (value) {
      this.props.history.push(`/search_list?keyword=${value}`)
      // 保存历史记录
      this.saveHistory(value)
    }
  }

  // 保存历史记录
  saveHistory = value => {
    // 存localStorage
    setItem('history_score', value)
    // 存redux
    let prevScore = this.props.historyScore
    prevScore[value] = value
    this.props.saveHistoryScore(prevScore)
  }

  // 删除历史记录
  delHistory = () => {
    console.log(this.props.delHistoryScore)
    // 删除localStorage中相应的数据
    deleteItem('history_score')
    // 删除redux中相应的数据
    this.props.delHistoryScore()
  }

  render() {
    const { value, SearchList } = this.state
    const { hotSearch, history, historyScore } = this.props
    return (
      <div>
        <SearchBar
          value={value}
          placeholder="请输入搜索内容"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onCancel={() => {
            history.push('/msite')
          }}
          ref={ref => (this.autoFocusInst = ref)}
        />
        {/* <!-- 历史记录 --> */}
        <div
          className="m-searchSuggestions"
          style={{
            display:
              value || Object.keys(historyScore).length === 0 ? 'none' : 'block'
          }}
        >
          <header className="hd">
            <h3 className="tit">历史记录</h3>
            <i
              className="del"
              onClick={() => {
                this.delHistory()
              }}
            ></i>
          </header>
          <nav className="list">
            {historyScore &&
              Object.keys(historyScore).map((item, index) => (
                <span
                  className="item"
                  key={index}
                  onClick={() => {
                    history.push(`/search_list?keyword=${item}`)
                  }}
                >
                  {item}
                </span>
              ))}
          </nav>
        </div>

        {/* <!-- 热门搜索 --> */}
        <div
          className="m-searchSuggestions"
          style={{ display: value ? 'none' : 'block' }}
        >
          <header className="hd">
            <h3 className="tit">热门搜索</h3>
          </header>
          <nav className="list">
            {hotSearch.map((item, index) => (
              <span
                className={`item ${item.highlight === 1 ? 'highlight' : ''}`}
                key={index}
                onClick={() => {
                  this.saveHistory(item.keyword)
                  history.push(
                    `/search_list?keyword=${encodeURIComponent(item.keyword)}`
                  )
                }}
              >
                {item.keyword}
              </span>
            ))}
          </nav>
        </div>

        {/* <!-- 搜索列表 --> */}
        <ul
          className="searchList"
          style={{ display: value ? 'block' : 'none' }}
        >
          {SearchList.map((item, index) => (
            <li
              className="searchItem"
              key={index}
              onClick={() => {
                this.saveHistory(item.name)
                history.push(`/search_list?keyword=${item.name}`)
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Search
