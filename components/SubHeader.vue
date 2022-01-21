<template>
  <div class="pt-16">
    <div class="flex px-10 py-4 justify-between">
      <div class="flex items-center">
        <i
          ><svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 mr-2 text-gray-600 fill-current"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              fill="#718096"
            ></path></svg
        ></i>
        <div class="flex gap-1 text-xl font-semibold text-ghBlue">
          <a class="hover:underline" href="#">tailwindcss </a>
          <p>/</p>
          <a class="hover:underline" href="#"> tailwindcss</a>
        </div>
      </div>
      <div class="flex gap-4">
        <GroupButton
          icon="far fa-eye"
          title="Watch"
          count="545"
          icon2="fa fa-caret-down"
        />
        <GroupButton icon="fa fa-star" title="Unstar" count="42.2k" />
        <GroupButton icon="fa fa-code-fork" title="Fork" count="1.1k" />
      </div>
    </div>
    <div class="flex items-center">
      <SubHeaderLink
        class="pl-8"
        active="border-yellow-500"
        icon="fa fa-code"
        title="Code"
      />
      <SubHeaderLink icon="fa fa-exclamation-circle" title="Issues" count="129" />
      <SubHeaderLink icon="fa fa-code-branch" title="Pull requests" count="38" />
      <SubHeaderLink icon="fa fa-comments" title="Discussion" count="" />
      <SubHeaderLink icon="far fa-play-circle" title="Action" count="" />
      <SubHeaderLink icon="fa fa-shield-alt" title="Security" count="" />
      <SubHeaderLink icon="far fa-chart-bar" title="Insights" count="" />
    </div>
    <div>
      <p class="border-b border-gray-300"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>