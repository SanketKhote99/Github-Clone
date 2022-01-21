<template>
  <div class="text-sm font-semibold">
    <a
      class="
        px-2
        py-1
        border
        rounded-l-lg
        border-gray-300
        bg-gray-100
        hover:bg-gray-200
      "
      href="#"
    >
      <i :class="[icon, 'text-gray-600']"></i>
      {{ title }}
      <!-- <i v-if="icon2" :class="[icon2, '']"></i> -->
    </a>
    <a
      class="px-2 py-1 border rounded-r-lg border-gray-300 hover:text-ghBlue"
      href="#"
      >{{ count }}</a
    >
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "count", "icon2"],
};
</script>

<style>
</style>