import * as veeValidate from "vee-validate"
import {localize} from'@vee-validate/i18n'
import rules from "@vee-validate/rules"
import { configure, defineRule } from "vee-validate"
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json"
import yup from "./yup"
//批量定义rules
configure({
    validateOnBlur:true,
    generateMessage:localize("zh_CN",zh_CN)
})
Object.keys(rules).forEach(key => defineRule(key, rules[key]))



const modules={yup,...veeValidate}
export default modules