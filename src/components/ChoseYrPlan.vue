<script setup lang="ts">
import { computed, ref } from "vue";

const options = ["Monthly", "Quarterly", "Annual"];
const activeTab = ref(0);
const trans = computed(() => {
  return 100 * activeTab.value + "%";
});

const activeChargeCard = ref(0);
</script>

<template>
  <div class="w-full h-full flex flex-col items-center bg-slate-50">
    <!--title-->
    <div class="flex flex-col items-center">
      <div class="text-slate-900 text-4xl">Get unlimited access.</div>
      <div class="text-slate-900 text-opacity-40 text-sm mt-2">
        find the perfect plan,starting from less than ￥1/week
      </div>
    </div>

    <div
      class="tab-btn relative grid grid-cols-3 w-[424px] h-14 mt-[36px] bg-slate-200 rounded-2xl border cursor-pointer"
    >
      <template v-for="(item, index) of options">
        <div
          class="w-full h-14 leading-[56px] text-center transition duration-[0.3s]"
          :class="[activeTab === index ? 'text-white' : 'text-black']"
          @click="activeTab = index"
        >
          {{ item }}
        </div>
      </template>
    </div>

    <div class="flex gap-x-3 mt-10">
      <div
        class="charge-card transition-all relative w-[306px] h-[480px] pt-[48px] pl-[24px] pr-[24px] bg-white rounded-xl border border-slate-200 cursor-pointer transition"
      >
        <!-- Tag -->
        <span
          class="bg-zinc-900 inline-block w-[44px] h-[22px] rounded -skew-x-12 text-white text-[14px] leading-[22px] text-center"
        >
          Plus
        </span>
        <!-- Price -->
        <div class="text-gray-800 font-bold mb-4">
          <span class="text-[28px]">￥</span><span class="text-[44px]">14</span>
          <span
            class="ml-[8px] text-[rgba(8,23,53,0.45)] text-[22px] line-through"
            >￥84</span
          >
          <div class="text-[16px]">
            <span class="capitalize text-[rgba(8,23,53,0.45)] font-[400]">
              billed
            </span>
            <span class="capitalize font-[400]"> yearly </span>
          </div>
        </div>
        <!-- divider -->
        <div class="border-t-[1px] mb-[16px]"></div>
        <!-- privilege -->
        <div class="flex">
          <span class="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.00002 18C8.99902 18 8.99802 18 8.99602 18C8.72902 17.999 8.47502 17.892 8.28802 17.702L4.28802 13.64C3.90002 13.246 3.90503 12.613 4.29903 12.226C4.69303 11.839 5.32502 11.843 5.71302 12.237L9.00602 15.581L18.294 6.29398C18.685 5.90298 19.317 5.90298 19.708 6.29398C20.099 6.68398 20.099 7.31798 19.708 7.70798L9.70801 17.708C9.52001 17.895 9.26502 18 9.00002 18Z"
                fill="#081735"
                fill-opacity="0.85"
              />
            </svg>
          </span>
          <span class="inline-block"> 500 points per month </span>
        </div>
        <!-- go pay btn  -->
        <button class="">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tab-btn {
  z-index: 0;

  &::after {
    z-index: -1;
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 140px;
    height: 56px;
    border-radius: 1rem;
    background-color: rgb(24 24 27);
    transition: all ease-in-out 0.3s;
    translate: v-bind(trans);
  }
}

.charge-card {
  z-index: 0;

  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all ease-in-out .2s;

  }
  &:hover::after {
    border-radius: 12px;
    border: 4px solid transparent;
    background-image: linear-gradient(to right, white, white),
      linear-gradient(to bottom, rgba(24, 82, 232, 1), rgba(23, 228, 196, 1));
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:active::after {
    border-radius: 12px;
    border: 4px solid transparent;
    background-image: linear-gradient(to right, white, white),
    linear-gradient(to bottom, rgba(24, 82, 232, 1), rgba(23, 228, 196, 1));
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }
}
</style>
