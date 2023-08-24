<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});
</script>
<template>
  <input
    type="text"
    class="input mt-12"
    :value="props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
<style lang="scss" scoped>
.m-input {
  @apply border border-gray-200 rounded-sm py-1 px-2 w-full outline-none focus:ring-2 ring-offset-2 ring-purple-600 focus:border-white;
}
</style>
