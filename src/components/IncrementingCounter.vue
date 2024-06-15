<script setup lang="ts">
import {TwitterOutlined} from "@ant-design/icons-vue";
import {onMounted, ref} from "vue";

const counter = ref(0)

onMounted(() => {
  updateCounter()()
})

const updateCounter = () => {
  const total = 12000
  const step = Math.ceil(total / 200)
  const updateCounterAnimate = () => {
    if (counter.value < total) {
      counter.value += step
      //setTimeout(updateCounterAnimate ,1)
      requestAnimationFrame(updateCounterAnimate)
    }
  }
  return updateCounterAnimate
}

</script>

<template>
  <div class="flex gap-y-[8px] w-full h-full p-[16px] bg-[#8e44ad]">
    <div class="flex flex-col items-center w-full">
      <twitter-outlined :style="{fontSize: '42px', color: '#fff'}" />
      <div class="text-[32px] text-[#fff]">{{ counter }}</div>
      <span class="text-[#fff]">Twitter Followers</span>
    </div>
  </div>
</template>

<style scoped lang="less">
</style>