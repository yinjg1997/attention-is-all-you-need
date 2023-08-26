<script setup lang="ts">
</script>

<template>
<div class="w-full h-full flex justify-center items-center bg-gray-300">
  <button class="btn relative h-32 pl-32 pr-32 rounded-[6px] border-[#1890ff] bg-[#1890ff]
  transition-all hover:bg-[#40a9ff] hover:border-[#40a9ff]
  after:absolute after:inset-0 after:w-full after:h-full after:rounded-[6px] after:opacity-0 after:transition after:duration-[1s]
  active:after:opacity-40 active:after:duration-0
  ">
    <span class="text-white text-6xl">
      Fake
    </span>
  </button>

</div>
</template>

<style scoped lang="less">
.btn::after {
  box-shadow: 0 0 0 24px #1890ff;
}
.btn:active::after{
  box-shadow: none;
}

</style>