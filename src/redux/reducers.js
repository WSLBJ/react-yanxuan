import { combineReducers } from 'redux'
import {
	GET_NAV_DATA, GET_Swiper_DATA, GET_SHOP_CATEGORIES,
	GET_CATEGORIES_LEFT, GET_CATEGORIES_RIGHT,
	GET_HOT_SEARCH, GET_SEARCH_SHOP,
	SAVE_HISTORY_SCORE, DEL_HISTORY_SCORE, SAVE_USER, DELETE_USER
} from './action-types'
import { getItem } from '../utils/Storage'

// 首页导航
function nav (prevState = [], action) {
	switch (action.type) {
		case GET_NAV_DATA:
			return action.data
		default:
			return prevState
	}
}

// 首页轮播图数据
function swiper (prevState = [], action) {
	switch (action.type) {
		case GET_Swiper_DATA:
			return action.data
		default:
			return prevState
	}
}

// 首页商品分类
function shopCategories (prevState = [], action) {
	switch (action.type) {
		case GET_SHOP_CATEGORIES:
			return action.data
		default:
			return prevState
	}
}

// 分类页左侧导航
function categoriesLeft (prevState = [], action) {
	switch (action.type) {
		case GET_CATEGORIES_LEFT:
			return action.data
		default:
			return prevState
	}
}

// 分类页右侧导航
function categoriesRight (prevState = [], action) {
	switch (action.type) {
		case GET_CATEGORIES_RIGHT:
			return action.data
		default:
			return prevState
	}
}

// 搜索热门数据
function hotSearch (prevState = [], action) {
	switch (action.type) {
		case GET_HOT_SEARCH:
			return action.data
		default:
			return prevState
	}
}

// 搜索商品数据
function searchShop (prevState = [], action) {
	switch (action.type) {
		case GET_SEARCH_SHOP:
			return action.data
		default:
			return prevState
	}
}

// 历史记录
function historyScore (prevState = getItem('history_score') || {}, action) {
	switch (action.type) {
		case SAVE_HISTORY_SCORE:
			return action.data
		case DEL_HISTORY_SCORE:
			return {}
		default:
			return prevState
	}
}

// 用户信息
function user (prevState = localStorage.getItem('user') || {}, action) {
	switch (action.type) {
		case SAVE_USER:
			return action.data
		case DELETE_USER:
			return {}
		default:
			return prevState
	}
}

export default combineReducers({
	nav,
	swiper,
	shopCategories,
	categoriesLeft,
	categoriesRight,
	hotSearch,
	searchShop,
	historyScore,
	user
})