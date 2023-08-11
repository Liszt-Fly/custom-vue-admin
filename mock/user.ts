import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/info',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				state: "success",
				data: {
					name: "mikeedu"
				}
			}
		}
	}
] as MockMethod[]