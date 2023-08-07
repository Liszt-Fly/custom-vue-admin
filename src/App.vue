<script setup lang="ts">
console.log(import.meta.env)
</script>

<template>
  <ul class="bg-red-400">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view></router-view>
</template>

