<script setup lang="ts"></script>
<template>
  <input type="text" placeholder="请输入手机号或邮箱" class="input mt-12" />
</template>
<style lang="scss" scoped>
.input {
  @apply border border-gray-200 rounded-sm py-1 px-2 w-full placeholder:text-xs outline-none focus:ring-2 ring-offset-2 ring-purple-600 focus:border-white;
}
</style>
