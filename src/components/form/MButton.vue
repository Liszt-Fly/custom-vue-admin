<template>
  <button class="button mt-4"><slot /></button>
</template>
<style lang="scss" scoped>
.button {
  @apply bg-indigo-700 hover:bg-indigo-500 duration-300 text-white w-full py-2 rounded-md;
}
</style>
