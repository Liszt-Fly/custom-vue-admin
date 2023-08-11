<script setup lang="ts">
import MLink from "@/components/form/MLink.vue";
import MButton from "@/components/form/MButton.vue";
</script>
<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-5">
    <div
      class="w-[720px] bg-white -translate-y-16 md:grid grid-cols-2 rounded-md shadow-sm"
    >
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div>
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="input mt-12"
          />
          <input
            type="text"
            placeholder="请输入手机号或邮箱"
            class="input mt-5"
          />
        </div>
        <MButton>登录</MButton>
        <div class="flex gap-2 justify-center mt-5">
          <MLink href="">网站首页</MLink>
          <MLink href="">会员注册</MLink>
          <MLink href="">找回密码</MLink>
        </div>
      </div>
      <!--* 登录背景-->
      <div class="hidden md:block">
        <img src="/login.jpg" class="w-full object-fit h-80" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  @apply border border-gray-200 rounded-sm py-1 px-2 w-full placeholder:text-xs outline-none focus:ring-2 ring-offset-2 ring-purple-600 focus:border-white;
}
.button {
  @apply bg-indigo-700 hover:bg-indigo-500 duration-300 text-white w-full py-2 rounded-md;
}
</style>
