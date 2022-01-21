<template>
  <div class="fixed w-full h-16 bg-ghDark flex items-center justify-between gap-2 p-8">
    <div class="flex items-center">
      <a href="#" class="fab fa-github fa-2xl text-white"></a>
      <input
        class="
          h-7
          px-5
          ml-8
          rounded-lg
          bg-ghLightDark
          placeholder-white
          focus:outline-none
          text-sm
        "
        placeholder="Search or jump to..."
        type="text"
      />
      <ul class="flex p-2 gap-2 text-white text-sm font-semibold">
        <li class="py-2 rounded-lg px-4 hover:bg-ghLightDark">
          <a href="#">Dashboard</a>
        </li>
        <li class="py-2 rounded-lg px-4 hover:bg-ghLightDark">
          <a href="#">Pull request</a>
        </li>
        <li class="py-2 rounded-lg px-4 hover:bg-ghLightDark">
          <a href="#">Issues</a>
        </li>
        <li class="py-2 rounded-lg px-4 hover:bg-ghLightDark">
          <a href="#">Marketplace</a>
        </li>
        <li class="py-2 rounded-lg px-4 hover:bg-ghLightDark">
          <a href="#">Explore</a>
        </li>
      </ul>
    </div>

    <div class="flex items-center p-2 gap-6">
      <a class="far fa-bell fa-lg text-white" href="#"></a>
      <a href="#">
        <img
          class="h-8 w-8 rounded-full"
          src="https://avatars.githubusercontent.com/u/80697243?v=4"
          alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>