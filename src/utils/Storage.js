// 存储
export function setItem (key, value) {
	if (!localStorage.getItem(key)) {
		localStorage.setItem(key, JSON.stringify({ [value]: value }))
	} else {
		let obj = JSON.parse(localStorage.getItem(key))
		obj[value] = value
		localStorage.setItem(key, JSON.stringify(obj))
	}
}

// 获取
export function getItem (key) {
	const value = localStorage.getItem(key)
	try {
		return JSON.parse(value)
	} catch (error) {
		return value
	}
}

// 删除
export function deleteItem (key) {
	localStorage.removeItem(key)
}
