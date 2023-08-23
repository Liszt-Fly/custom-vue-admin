<script setup lang="ts">
import userApi from "@/apis/user";
import v from "@/plugins/validate";
import { store } from "@/utils";
const { Form, Field, ErrorMessage } = v

const schema = {
	account: { required: true, regex: /.+@.+|\d{11}/ },
	password: { required: true, min: 3, max: 15 }
}
const onsubmit = async (values: any) => {
	let res = await userApi.login(values)
	store.set('token', { expire: 100, token: res.data.token })
}
</script>
<template>
	<Form #default="{ errors }" :validation-schema="schema" @submit="onsubmit"
		class="bg-slate-300 h-screen flex justify-center items-center p-5">
		<div class="w-[720px] bg-white -translate-y-16 md:grid grid-cols-2 rounded-md shadow-sm">
			<div class="p-6 flex flex-col justify-between">
				<div>
					<h2 class="text-center text-gray-700 text-lg mt-4">会员登录</h2>
					<div class="mt-12">
						<Field name="account" class="m-input" value="admin@me.com"></Field>
						<div v-if="errors.account" class="m-error mt-3">
							请输入正确的邮箱号和手机号
						</div>
						<!-- <ErrorMessage name="account" as="div" class="m-error mt-3"></ErrorMessage> -->
						<Field type="password" label="密码" as="input" name="password" class="m-input mt-5"></Field>
						<ErrorMessage name="password" as="div" class="m-error mt-3"></ErrorMessage>
						<!-- <MInput v-model="form.account" placeholder="请输入手机号"  class="mt-12"></MInput>
					<MInput type="text" placeholder="请输入密码" class="input mt-5" /> -->
					</div>
					<MButton>登录</MButton>
				</div>
				<div class="flex gap-2 justify-center mt-2">
					<MLink href="">网站首页</MLink>
					<MLink href="">会员注册</MLink>
					<MLink href="">找回密码</MLink>
				</div>
			</div>
			<!--* 登录背景-->
			<div class="hidden md:block ">
				<img src="/login.jpg" class=" h-[380px] w-full  object-cover " />
			</div>
		</div>
	</Form>
</template>

<style lang="scss" scoped></style>
