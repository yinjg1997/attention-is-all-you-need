<script setup lang="ts">
import { ref, watch } from "vue";

const load = ref(0);
const loadOpacity = ref(1);
const blur = ref(30);

const blurring = () => {
  load.value++;
};

const inter = setInterval(blurring, 30);

/**
 * 映射函数
 * @param num
 * @param in_min
 * @param in_max
 * @param out_min
 * @param out_max
 */
const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

watch(load, (newValue) => {
  loadOpacity.value = scale(newValue, 0, 100, 1, 0);
  blur.value = scale(newValue, 0, 100, 30, 0);

  if (newValue > 99) {
    clearInterval(inter);
  }
});
</script>

<template>
  <div class="relative w-full h-full">
    <div
      class="w-full h-full bg-cover bg-center"
      :style="{
        backgroundImage: 'url(/rick-and-morty-portal-uhd-4k-wallpaper.jpg)',
        filter: `blur(${blur}px)`,
      }"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 translate-x-[-50%] text-3xl font-bold text-white"
      :style="{
        opacity: loadOpacity,
      }"
    >
      {{ load }}%
    </div>
  </div>
</template>

<style scoped></style>
