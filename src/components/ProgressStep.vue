<script setup lang="ts">
import { ref } from "vue";

const circleNum = 4;
const active = ref(0);
const actives = ref<number[]>([0]);
const progressWidth = ref(0);
const next = () => {
  if (active.value < circleNum - 1) {
    active.value++;
    actives.value.push(active.value);
    progressWidth.value = ((actives.value.length - 1) / (circleNum - 1)) * 100;
  }
};

const pre = () => {
  if (active.value > 0) {
    active.value--;
    actives.value.pop();
    progressWidth.value = ((actives.value.length - 1) / (circleNum - 1)) * 100;
  }
};
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-y-8">
    <div
      class="flex justify-between relative max-w-full w-[350px] before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-full before:h-[4px] before:bg-gray-400 before:translate-y-[-50%]"
    >
      <div
        class="bg-orange-400 absolute top-[50%] left-0 translate-y-[-50%] h-[4px] transition-all duration-300"
        :style="{
          width: `${progressWidth}%`,
        }"
      ></div>
      <template v-for="(item, index) in circleNum" :key="index">
        <div
          class="text-white w-8 h-8 flex justify-center items-center rounded-full bg-purple-400 border-4 border-solid border-gray-400 transition-all duration-500 z-[1]"
          :class="[actives.includes(index) ? 'border-orange-400' : '']"
        >
          {{ item }}
        </div>
      </template>
    </div>

    <div class="flex justify-center gap-x-8">
      <button
        class="w-16 h-8 bg-purple-400 rounded-xl active:scale-95"
        @click="pre"
      >
        Pre
      </button>
      <button
        class="w-16 h-8 bg-purple-400 rounded-xl active:scale-95"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
</template>

<style scoped></style>
