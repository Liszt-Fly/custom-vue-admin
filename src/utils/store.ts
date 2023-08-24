import { date } from "yup"

interface IData {
    expire?: number,
    [key: string]: any
}
export default {
    set(key: string, data: IData) {
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire * 1000
        }
        localStorage.setItem(key, JSON.stringify(data))
    },
    get(key: string): IData | null {
        const item = localStorage.getItem(key)

        if (item) {
            const data: IData = JSON.parse(item)
            if (data?.expire) {
                console.log(data.expire)
                console.log(new Date().getTime())
                console.log(data.expire < new Date().getTime())
                if (data.expire && data.expire < new Date().getTime()) {
                    console.log("我被删除了")
                    localStorage.removeItem(key)
                    return null
                }

                return data
            }
        }
        return null
    }
} 