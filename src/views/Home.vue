<script setup lang="ts" ></script>

<template>
    <div class="h-screen w-screen flex justify-center items-center bg-blue-300 flex-col">
        <img src="avatar.png" width="200" class="rounded-full">
        <div class="text-4xl font-semibold text-white "> Qiao's admin manage system</div>
        <div class="box flex">
            <router-link :to="{ name: 'admin/user' }"
                class="text-white mt-[4rem] border-solid border-blue-200 border-2 p-2 rounded-md w-[200px] flex items-center justify-center hover:scale-105 duration-300 mr-10">后台管理</router-link>
            <router-link :to="{ name: 'login' }"
                class="text-white mt-[4rem] border-solid border-2 border-blue-200 p-2 rounded-md w-[200px] flex items-center justify-center hover:scale-105 duration-300">用户登录</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

