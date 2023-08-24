<script setup lang="ts">
import MenuComp from "@/components/menu.vue";
</script>
<template>
  <div class="admin">
    <menu-comp></menu-comp>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  @apply w-screen h-screen flex;
}
</style>
<script lang="ts">
export default {
  route: { meta: { auth: true } },
};
</script>
