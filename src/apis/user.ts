import { http } from "@/plugins/axios"

interface User {
	name: string
}
interface Login {
	token: string
}
class userApi {
	info() {
		return http.request<User>({
			url: 'info'
		})
	}
	login() {
		return http.request<Login>({
			url: "login"
		})
	}
}

export default new userApi()