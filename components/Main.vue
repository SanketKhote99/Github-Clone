<template>
  <div class="grid grid-cols-4 px-7 py-6">
    <div class="col-span-3 ...">
      <div class="flex justify-between p-3">
        <div>
          <a
            class="
              text-sm
              font-semibold
              px-6
              py-1
              border
              rounded-lg
              border-gray-400
              bg-blue-50
              hover:bg-gray-100
            "
            href="#"
          >
            <i class="fa fa-code-fork text-gray-500 fa-lg"></i>
            master
            <i class="fa fa-caret-down fa-xs"></i>
          </a>
        </div>
        <div class="flex gap-2 mr-4">
          <a
            class="
              text-sm
              font-semibold
              px-2
              py-1
              border
              rounded-lg
              border-gray-400
              bg-blue-50
              hover:bg-gray-100
            "
            href="#"
          >
            Go to file
          </a>
          <a
            class="
              text-sm
              font-semibold
              px-4
              py-1
              border
              rounded-lg
              border-gray-400
              bg-blue-50
              hover:bg-gray-100
            "
            href="#"
          >
            Add file
            <i class="fa fa-caret-down fa-xs"></i>
          </a>
          <a
            class="
              text-sm
              font-semibold
              px-6
              py-1
              border
              rounded-lg
              text-white
              border-gray-400
              bg-green2
              hover:bg-green1
            "
            href="https://tailwindcomponents.com/component/clone-github-new-design/landing#"
          >
            <i class="fa fa-code-fork fa-lg"></i>
            Clone
            <i class="fa fa-caret-down fa-xs"></i>
          </a>
        </div>
      </div>
      <div class="border border-blue-200 rounded-xl mr-7 ml-3">
        <div
          class="
            flex
            justify-between
            bg-blue-50
            border-b border-blue-200
            rounded-t-xl
            px-4
          "
        >
          <div class="flex py-3 gap-2 text-sm items-center">
            <img
              class="h-6 w-6 rounded-md"
              src="https://avatars3.githubusercontent.com/in/2141?s=60&v=4"
              alt=""
            />
            <h1 class="font-semibold">dependabot-preview</h1>
            <p class="text-gray-500">committed 3 days ago</p>
          </div>
          <div class="flex gap-4 font-semibold text-sm text-gray-600">
            <a
              class="
                hover:underline
                hover:text-blue-400
                flex
                items-center
                justify-center
              "
              href="#"
            >
              <i
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 mr-2 fill-current"
                  height="16"
                  text="gray"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"
                    fill="#4A5568"
                  ></path></svg
              ></i>
              2,954 commits
            </a>
            <a
              class="
                hover:underline
                hover:text-blue-400
                flex
                items-center
                justify-center
              "
              href="#"
            >
              <i
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 mr-1 fill-current"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    fill="#4A5568"
                  ></path></svg
              ></i>
              22 branches
            </a>
            <a
              class="
                hover:underline
                hover:text-blue-400
                flex
                items-center
                justify-center
              "
              href="#"
            >
              <i
                ><svg
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 mr-1"
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
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    stroke="#4A5568"
                    fill="none"
                    stroke-width="2px"
                  ></path></svg
              ></i>
              76 tags
            </a>
          </div>
        </div>
        <div>
          <MainList
            title=".github"
            subtitle="Drop fs-extra version to.."
            time="2 months ago"
          />
          <MainList
            title="dist"
            subtitle="
Add empty .npmignore so dist files are distributed with releases

"
            time="3 years ago"
          />
          <MainList
            title="scripts"
            subtitle="
Don't generate color opacity code in color plugins if not necessary

"
            time="3 months ago"
          />
          <MainList
            title="src"
            subtitle="
Throw if contains a class"
            time="last months"
          />
          <MainList
            title="LICENSE"
            subtitle="

Avoid updating license every year"
            time="3 years ago"
          />
          <MainList
            title="README.md"
            subtitle="

Replace logo in README"
            time="2 months ago"
          />
          <MainList
            title="package.json"
            subtitle="

1.4.6"
            time="last month"
          />
          <MainList
            title="tailwind.css"
            subtitle="

Undo accidental changes to CDN build process"
            time="6 months ago"
          />
        </div>
      </div>

      <MainData />
    </div>

    <div class="col-span-1">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style>
</style>