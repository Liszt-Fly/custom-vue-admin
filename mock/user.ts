import { MockMethod } from 'vite-plugin-mock'
import { Random } from 'mockjs'
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
	},
	{
		url: '/api/login',
		method: 'post',
		response: () => {
			return {
				code: 200,
				message: "登陆成功",
				state: "success",
				data: {
					token: Random.string(10)
				}
			}
		}
	}
] as MockMethod[]