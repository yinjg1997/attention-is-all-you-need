<script setup lang="ts">
import { ref } from "vue";
const imgUrls = [
  {
    name: "Explore The World",
    url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Wild Forest",
    url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    name: "Sunny Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    name: "City on Winter",
    url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    name: "Mountains - Clouds",
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

const activeImgIndex = ref(0);
</script>

<template>
  <div class="flex h-[100%] w-full">
    <template v-for="(item, index) of imgUrls" :key="item.name">
      <div
        class="duration-700 rounded-[50px] relative ml-[10px] mr-[10px] h-full flex-auto cursor-pointer bg-cover text-white transition-all"
        :class="[activeImgIndex === index ? 'active' : '']"
        :style="{ backgroundImage: 'url(' + item.url + ')' }"
        @click="activeImgIndex = index"
      >
        <h3 class="absolute bottom-[20px] left-[20px] text-[24px] opacity-0">
          {{ item.name }}
        </h3>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.active {
  flex-grow: 5;

  h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }
}
</style>
