<script setup lang="ts">
import {Form,Field, ErrorMessage} from "vee-validate"
import { ref } from "vue"
import {required} from '@vee-validate/rules'
const account=ref<string>("")
const email=(value:string)=>{
	return /@/.test(value)?true:"格式错误"
}
const onSubmit=(values:string)=>{
	alert(66666)
}
</script>
<template>
	<Form @submit="onSubmit">
		<Field name="account" :rules="{required:true}" :validate-on-input="true" #default="{field,errorMessage}">
			<input type="text" v-bind="field" v-model="account">
			<hr>
			<p>{{ errorMessage }}</p>
		</Field>
		<button @click="onSubmit">提交</button>
	</Form>
</template>

<style lang="scss">
div{
	@apply flex w-screen h-screen justify-center items-center bg-gray-800;
	input{
		@apply border-4 p-2 rounded-md border-violet-500;
	}
}
</style>
