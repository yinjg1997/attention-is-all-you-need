<script setup lang="ts">
</script>

<template>
  <div class="w-full h-full flex">
    <!-- PlayStation -->
    <div class="relative overflow-hidden content left flex-auto h-full flex justify-center items-center
      transition-all duration-1000"
    >
      <div class="absolute w-full h-full bg-[rgba(124,58,237,.7)]"></div>
      <div class="absolute flex flex-col items-center gap-y-16 mb-[300px]">
        <div class="w-[390px] text-6xl font-bold text-white">PlayStation 5</div>
        <button class="h-16 w-[220px] border-[3px] border-solid border-white
          hover:bg-violet-600 hover:border-violet-600"
        >
          <span class="text-white font-bold"> Buy Now </span>
        </button>
      </div>
    </div>

    <!-- Xbox -->
    <div class="relative overflow-hidden content right flex-auto h-full flex justify-center items-center
      transition-all duration-1000"
    >
      <div class="absolute w-full h-full bg-[rgba(3,7,18,.7)]"></div>
      <div class="absolute flex flex-col items-center gap-y-16 mb-[300px]">
        <div class="w-[390px] text-6xl font-bold text-white">Xbox Series X</div>
        <button class="h-16 w-[220px] border-[3px] border-solid border-white
          hover:bg-emerald-600 hover:border-emerald-600"
        >
          <span class="text-white font-bold"> Buy Now </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
   &:hover {
     flex-grow: 3;
   }
}

.left {
  background-image: url("/ps.jpg");
  background-size: cover;
}

.right {
  background-image: url("/xbox.jpg");
  background-size: cover;
}
</style>
