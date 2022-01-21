<template>
  <div class="pl-2 pt-2">
    <a
      :class="[
        active,
        'flex items-center justify-center  gap-1 border-b-2 border-transparent hover:border-gray-300 pb-2 px-4 text-sm',
      ]"
      href="#"
    >
      <i :class="[icon, ' text-sm text-gray-600']"></i>
      {{ title }}
      <p
        v-if="count"
        :class="[
          'flex items-center justify-center bg-gray-200 rounded-full h-5 w-5 text-xs',
        ]"
      >
        {{ count }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "active", "count"],
};
</script>

<style>
</style>