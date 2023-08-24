<script setup lang="ts"></script>
<template>
    <router-view></router-view>
</template>

<script lnag="ts">
export default {
    route: { meta: { auth: true } }
}
</script>
