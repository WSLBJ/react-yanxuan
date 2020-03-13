/** 
 * 配置拦截器
*/
import axios from 'axios'
import qs from 'qs'

//创建axios实例
const axiosInstance = axios.create({
	baseURL: '/api',
	timeout: 20000,
	headers: {}
})

// 请求拦截器
axiosInstance.interceptors.request.use(config => {
	const { method, data } = config
	if (method.toUpperCase() === 'POST') {
		config.data = qs.stringify(data)
	}
	return config
})

//响应拦截器
axiosInstance.interceptors.response.use(response => {
	if (response.data.status === 0) {
		return response.data.data
	} else {
		//功能错误
		return Promise.reject(response.data.msg)
	}
}, err => {
	// 错误原因
	let errMsg = ''
	if (err.response) {

	}

	return Promise.reject(errMsg || '发生未知错误 ，请联系管理员')
})

export default axiosInstance