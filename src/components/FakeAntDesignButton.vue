<script setup lang="ts">
</script>

<template>
<div class="w-full h-full flex justify-center items-center bg-gray-300">
  <button class="btn relative h-32 pl-32 pr-32 rounded-[6px] border-[#1890ff] bg-[#1890ff]
  transition-all
  hover:bg-[#40a9ff] hover:border-[#40a9ff]
  ">
    <span class="text-white text-6xl">
      Fake
    </span>
  </button>

</div>
</template>

<style scoped>
.btn::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  opacity: 0;
  box-shadow: 0 0 0 24px #1890ff;
  transition: 1s;
}

.btn:active::after{
  opacity: .4;
  box-shadow: none;

  transition: 0s; /*取消过渡*/
}
</style>