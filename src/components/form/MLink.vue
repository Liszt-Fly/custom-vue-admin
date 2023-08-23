<script lang="ts" setup>
defineProps({
  href: String,
});
</script>
<template>
  <a href="" class="text-sm hover:text-gray-400 duration-150 cursor-pointer"
    ><slot
  /></a>
</template>
