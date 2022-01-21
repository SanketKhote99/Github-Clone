<template>
  <div class="grid grid-cols-4 text-sm px-4 py-2 hover:bg-gray-100 ">
    <div
      class="
        flex
        col-span-1
        items-center
        gap-2
        hover:underline
        hover:text-blue-400
      "
    >
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-600"
        fill="currentColor"
        viewBox="0 0 20 20"
        width="24"
        height="24"
      >
        <path
          d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
          fill="#3182CE"
        ></path>
      </svg>
      <!-- <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-blue-600"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="24"
        height="24"
      >
        <path
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          stroke="#3182CE"
          fill="none"
          stroke-width="2px"
        ></path>
      </svg> -->
      <a href="#">
        {{ title }}
      </a>
    </div>
    <a class="col-span-2 hover:underline hover:text-blue-400" href="#">
      {{ subtitle }}
    </a>
    <p class="col-span-1 flex justify-end">{{ time }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "time"],
};
</script>

<style>
</style>