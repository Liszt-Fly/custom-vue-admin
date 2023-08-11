import { http } from "@/plugins/axios"

interface User {
	name: string
}
class userApi {
	info() {
		return http.request<User>({
			url: 'info'
		})
	}
	login() {
		return http.request({
			url: "login"
		})
	}
}

export default new userApi()