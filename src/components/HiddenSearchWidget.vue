<script setup lang="ts">
import { SearchOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const isCollapse = ref(false);
</script>

<template>
  <div class="w-full h-full bg-purple-400 flex justify-center items-center">
    <div class="relative bg-white h-12 flex">
      <input
        type="text"
        placeholder="Search..."
        class="h-full p-3 focus:outline-0 transition-all duration-500"
        :class="isCollapse ? 'w-0' : 'w-[300px]'"
      />
      <button
        class="absolute right-0 w-12 h-12 flex justify-center items-center bg-white"
        @click="isCollapse = !isCollapse"
      >
        <SearchOutlined class="text-[24px]"></SearchOutlined>
      </button>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
