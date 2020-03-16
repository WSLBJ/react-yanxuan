/** 
 * 配置拦截器
*/
import axios from 'axios'
import qs from 'qs'
import { errCode } from '../config/error-code'

//创建axios实例
const axiosInstance = axios.create({
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
	if (response.data.code === 0) {
		return response.data.data
	} else {
		//功能错误
		return Promise.reject(response.data.msg)
	}
}, err => {
	// 错误原因
	let errMsg = ''
	if (err.response) {
		// 接收到了响应，但是是失败的
		const status = err.response.status
		errMsg = errCode[status]

		if (status === 401) {
			alert('登录过期，请重新登录')
		}
	} else {
		// 没有接收到响应
		if (err.message.indexOf('Network Error') !== -1) {
			errMsg = '网络连接失败，请重新连接网络试试'
		} else if (err.message.indexOf('timeout') !== -1) {
			errMsg = '网络连接超时，请连上wifi试试'
		}
	}
	return Promise.reject(errMsg || '发生未知错误 ，请联系管理员')
})

export default axiosInstance