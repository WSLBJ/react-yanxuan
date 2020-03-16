/** 
 * 用来创建action对象的工厂函数模块
*/
import {
	reqNav, reqSwiper, reqShopCategories,
	reqCategoriesLeft, reqCategoriesRight, reqHotSearch, reqSearchShop
} from '../api'
import {
	GET_NAV_DATA, GET_Swiper_DATA, GET_SHOP_CATEGORIES,
	GET_CATEGORIES_LEFT, GET_CATEGORIES_RIGHT, GET_HOT_SEARCH, GET_SEARCH_SHOP,
	SAVE_HISTORY_SCORE, DEL_HISTORY_SCORE, SAVE_USER, DELETE_USER
} from './action-types'

// 生成action对象, 首页导航数据
const getNav = (nav) => ({ type: GET_NAV_DATA, data: nav })
export const getNavAsync = () => {
	return async (dispatch) => {
		const result = await reqNav()
		// 触发更新
		dispatch(getNav(result))
		return result
	}
}

// 首页轮播图数据
const getSwiper = (swiper) => ({ type: GET_Swiper_DATA, data: swiper })
export const getSwiperAsync = () => {
	return async (dispatch) => {
		const result = await reqSwiper()
		// 触发更新
		dispatch(getSwiper(result))
		return result
	}
}

// 首页商品分类
const getShopCategories = (categories) => ({ type: GET_SHOP_CATEGORIES, data: categories })
export const getShopCategoriesAsync = () => {
	return async (dispatch) => {
		const result = await reqShopCategories()
		// 触发更新
		dispatch(getShopCategories(result))
		return result
	}
}
// 分类页左侧导航
const getCategoriesLeft = (categories) => ({ type: GET_CATEGORIES_LEFT, data: categories })
export const getCategoriesLeftAsync = () => {
	return async (dispatch) => {
		const result = await reqCategoriesLeft()
		// 触发更新
		dispatch(getCategoriesLeft(result))
		return result
	}
}
// 分类页右侧导航
const getCategoriesRight = (categories) => ({ type: GET_CATEGORIES_RIGHT, data: categories })
export const getCategoriesRightAsync = () => {
	return async (dispatch) => {
		const result = await reqCategoriesRight()
		// 触发更新
		dispatch(getCategoriesRight(result))
		return result
	}
}

// 搜索热门数据
const getHotSearch = (hotData) => ({ type: GET_HOT_SEARCH, data: hotData })
export const getHotSearchAsync = () => {
	return async (dispatch) => {
		const result = await reqHotSearch()
		// 触发更新
		dispatch(getHotSearch(result))
		return result
	}
}

// 搜索商品数据
const getSearchShop = (data) => ({ type: GET_SEARCH_SHOP, data })
export const getSearchShopAsync = () => {
	return async (dispatch) => {
		const result = await reqSearchShop()
		// 触发更新

		dispatch(getSearchShop(result))
		return result
	}
}

// 存储历史记录
export const saveHistoryScore = (scoreObj) => ({
	type: SAVE_HISTORY_SCORE,
	data: scoreObj
})

// 删除历史记录
export const delHistoryScore = () => ({
	type: DEL_HISTORY_SCORE
})

// 保存用户信息
export const saveUser = (user) => {
	// 保存用户到localStorage中
	localStorage.setItem('user', JSON.stringify(user))
	// 保存用户到redux中
	return { type: SAVE_USER, data: user }
}

// 删除用户信息
export const deleteUser = () => {
	// 保存用户到localStorage中
	localStorage.setItem('user', '')
	// 保存用户到redux中
	return { type: DELETE_USER }
}