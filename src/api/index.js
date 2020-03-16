/**
 * 封装请求函数
 */
import axiosInstance from './request'

// 获取首页导航数据
export const reqNav = () => {
	return axiosInstance({
		url: '/index_nav',
		method: 'GET'
	})
}

// 获取首页轮播图数据
export const reqSwiper = () => {
	return axiosInstance({
		url: '/index_swiper',
		method: 'GET'
	})
}

// 获取首页商品分类数据
export const reqShopCategories = () => {
	return axiosInstance({
		url: '/shop_categories',
		method: 'GET'
	})
}

// 分类页左侧导航
export const reqCategoriesLeft = () => {
	return axiosInstance({
		url: '/categories_left',
		method: 'GET'
	})
}

// 分类页右侧导航
export const reqCategoriesRight = () => {
	return axiosInstance({
		url: '/categories_right',
		method: 'GET'
	})
}

// 获取搜索热门数据
export const reqHotSearch = () => {
	return axiosInstance({
		url: '/hot_search',
		method: 'GET'
	})
}

// 获取搜索出来的商品数据
export const reqSearchShop = () => {
	return axiosInstance({
		url: '/search_shop',
		method: 'GET'
	})
}

// 发送短信验证码
export const reqSendCode = (phone) => axiosInstance({
	method: 'GET',
	url: '/sendcode',
	params: {
		phone
	}
})

// 手机号验证码登陆
export const reqSmsLogin = ({ phone, code }) => axiosInstance({
	method: 'post',
	url: '/login_sms',
	data: {
		phone,
		code
	}
})

// 邮箱密码登陆
export const reqEmailLogin = ({ email, pwd }) => axiosInstance({
	method: 'post',
	url: '/login_pwd',
	data: {
		email,
		pwd,
	}
})