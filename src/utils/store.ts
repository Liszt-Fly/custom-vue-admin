
interface IData {
    expire?: number,
    [key: string]: any
}
export default {
    set(key: string, data: IData) {
        if (data.expire) {
            data.expire = new Date().getTime() + data.expire
        }
        localStorage.setItem(key, JSON.stringify(data))
    },
    get(key: string): IData | null {
        const item = localStorage.getItem(key)
        if (item) {
            const data: IData = JSON.parse(item)
            if (data?.expire) {
                if (data.expire < new Date().getTime()) {
                    localStorage.removeItem(key)
                    return null
                }
                return data
            }
        }
        return null
    }
} 