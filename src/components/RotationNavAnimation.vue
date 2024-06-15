<script setup lang="ts">
import { ref } from "vue";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons-vue";

const isOpen = ref(false);
const navs = ["Blog", "Github"];
</script>
<template>
  <div
    class="w-full h-full flex flex-col gap-y-4 relative bg-gray-700 overflow-y-auto overflow-x-hidden"
  >
    <!-- btn -->
    <div
      class="absolute w-28 h-28 bg-purple-400 rounded-br-full origin-top-left z-10"
    >
      <button
        class="h-full absolute top-[-10%] left-[30%] cursor-pointer origin-top-left transition-transform duration-500"
        :class="[isOpen ? '-rotate-90' : '']"
        @click="isOpen = true"
      >
        <MenuOutlined class="text-3xl text-white"></MenuOutlined>
      </button>

      <button
        class="h-full absolute top-[-10%] left-[30%] cursor-pointer origin-top-left transition-transform duration-500"
        :class="[isOpen ? '' : 'rotate-90']"
        @click="isOpen = false"
      >
        <CloseOutlined class="text-3xl text-white"></CloseOutlined>
      </button>
    </div>

    <!-- content -->
    <div
      class="pt-[120px] pl-[100px] pr-[100px] origin-top-left transition-transform duration-500 bg-white"
      :class="[isOpen ? '-rotate-[20deg]' : '']"
    >
      <h1 class="text-4xl mt-4">Amazing Article</h1>
      <small class="italic">Florin Pop</small>
      <p class="mt-4 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
        dolor omnis atque fuga labore modi veritatis porro laborum minus, illo,
        maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia
        labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus
        veritatis molestiae cumque quod voluptates ab non, tempore cupiditate?
        Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum
        sint nam quas dolor dignissimos in error placeat quae temporibus minus
        optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium.
        Ducimus consequuntur perferendis consequatur nobis exercitationem
        molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
      </p>

      <h3 class="text-3xl mt-4 mb-4">My Dog</h3>
      <img
        class="max-w-full"
        src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        alt="doggy"
      />
      <p class="mt-4 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
        deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere
        earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
        totam placeat molestias illo laudantium? Minus id minima doloribus
        dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus
        veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo
        provident. Voluptates sint, neque fuga cum illum, tempore autem maxime
        similique laborum odio, magnam esse. Aperiam?
      </p>
    </div>

    <nav
      class="fixed bottom-[6%] left-[220px] w-[150px] h-[200px] z-10 flex flex-col justify-center items-center gap-y-4 overflow-hidden"
    >
      <template v-for="item of navs" :key="item">
        <div
          class="transition-transform duration-700 -translate-x-[200px] text-white cursor-pointer active:scale-50"
          :class="[isOpen ? `translate-x-4` : '']"
        >
          {{ item }}
        </div>
      </template>
    </nav>
  </div>
</template>

<style scoped></style>
