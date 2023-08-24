<script setup lang="ts">
import { onMounted, ref } from "vue";

const boxRef = ref<HTMLDivElement[]>();
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxRef.value?.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    box.classList.add('translate-x-[400%]')
    console.log(boxTop)
    if (boxTop < triggerBottom) {
      box.classList.remove('translate-x-[400%]');
      box.classList.add("translate-x-[0]");
    }
    else{
      box.classList.remove("translate-x-[0]");
      box.classList.add('translate-x-[400%]');
    }
  });
};

onMounted(() => {
  checkBoxes();
});

const handleScroll = () => {
  checkBoxes();
};
</script>
<template>
  <div
    class="w-full h-full bg-amber-100 flex flex-col items-center overflow-x-hidden overflow-y-scroll"
    @scroll="handleScroll"
  >
    <h1 class="text-3xl font-bold m-4">Scroll to see the animation</h1>
    <div class="grow">
      <template v-for="item in 20" :key="item">
        <div
          ref="boxRef"
          class="
          w-[300px] h-[160px] rounded-2xl bg-blue-300 m-4 shadow-xl
          text-white font-bold text-4xl text-center leading-[160px]
           transition-transform duration-400"
        >
          {{ item }}
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>
