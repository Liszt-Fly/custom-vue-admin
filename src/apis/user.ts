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
	login(data:any) {
		return http.request<Login>({
			url: "login",
			method:"post",
			data
		})
	}
}

export default new userApi()