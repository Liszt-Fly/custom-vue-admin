import * as yup from "yup"

yup.setLocale({
    mixed:{
        required:"${label}必须输入"
    },
    string:{
        email:"邮箱格式错误",
        max:"不能超过${max}个字符"
    },

})
export default yup