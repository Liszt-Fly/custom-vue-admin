<script lang="ts" setup>
import { email, required,numeric } from '@vee-validate/rules';
import { defineRule, useField, useForm } from 'vee-validate';
import v from "@/plugins/validate"
defineRule("required",required)
defineRule("email",email)
defineRule("password",numeric)
const {handleSubmit,errors}=useForm({
    initialValues:{
        username:"乔阳",
        password:""
    },
    validationSchema:{
        username:v.yup.string().email().required().label("用户名")
    }
})
const {errorMessage:passwordError,value:passwordValue,label:passwordLabel}=useField("password",{label:"密码"})
const {errorMessage:usernameError,value:usernameValue ,label} = useField("username",{required:true,email:true},{label:"用户名"})
const onSubmit=handleSubmit((values)=>{
    console.log('values',values)
    alert("ok")
})
</script>

<template>
    <div class="text-white">
        <Form @submit="onSubmit">
            <p>{{ label }}</p>
            <input class="text-black" type="text" v-model="usernameValue">
            <p>{{ errors.username }}</p>
            <p>{{ passwordLabel }}</p>
            <input class="text-black" type="text" v-model="passwordValue">
            <p>{{ errors.password }}</p>
            <button>提交</button>
        </Form>
    </div>
</template>
<style lang="scss" scoped>
div{
	@apply flex w-screen h-screen justify-center items-center bg-gray-800;
	input{
		@apply border-4 p-2 rounded-md border-violet-500;
	}
}
</style>