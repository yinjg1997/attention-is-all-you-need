<script setup lang="ts">
import {computed, nextTick, ref, watch} from "vue";


const activeIndex = ref(-1)

// <<<<<<<<<<<<<<  <<<<<<<<<<<<<<<<<<<<<
const percent = computed(() => {
  return ((activeIndex.value + 1) * 250 / 2000) * 100
})

const remained = computed(() => {
  return 2 * (1 - percent.value / 100)
})

const percentageRef = ref<HTMLDivElement>()

watch(() => activeIndex.value, async () => {
  await nextTick() // 因为，percentageRef 上有 v-if， 所以这里等待 percentage 渲染出来
  if (percentageRef.value) {
    percentageRef.value.style.height = percent.value + '%'
  }
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const handleClickSmallCup = (index: number) => {
  // 再次点击取消的小逻辑
  if (index === activeIndex.value) {
    --activeIndex.value
  } else {
    activeIndex.value = index
  }
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
</script>

<template>
  <div class="flex flex-col items-center w-full h-full bg-[#3494e4] text-[#fff]">
    <div class="mt-[8px] text-[32px] font-bold">
      Drink Water
    </div>
    <div class="mt-[8px] mb-[10px] text-[18px]">
      Goal: 2 Liters
    </div>
    <div class="flex flex-col items-center w-[150px] h-[330px] mt-[30px] mb-[30px] bg-[#fff] border-solid border-[4px] border-[#144fc6]
    rounded-b-[40px] overflow-hidden text-[18px] text-[#144fc6]">
      <div v-if="remained > 0" class="flex-1 flex flex-col items-center justify-center w-full transition-all">
        <span class="text-[20px] font-bold">
          {{ `${remained}L` }}
        </span>
        <span class="text-[12px]">
          Remained
        </span>
      </div>
      <div ref="percentageRef" v-if="activeIndex > -1" class="flex justify-center items-center w-full h-[0] bg-[#6ab3f8] transition-all">
        <span class="text-[30px] font-bold">
          {{ `${percent}%` }}
        </span>
      </div>
    </div>
    <div class="mb-[6px]">
      Select how many glasses of water that you have drank
    </div>
    <div class="flex justify-center items-center flex-wrap w-[280px]">
      <template v-for="(item, index) in 8" :key="item">
        <div class="flex flex-col justify-center items-center w-[50px] h-[95px] m-[5px] bg-[#fff]
        border-solid border-[4px] border-[#144fc6] rounded-b-[15px] cursor-pointer text-[#144fc6] transition-all"
             :class="{'fill-cup': index <= activeIndex}"
             @click="handleClickSmallCup(index)"
        >
          <div class="text-center text-[14px]">
            250 ml
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.fill-cup {
  color: #fff;
  background-color: #6ab3f8;
}
</style>