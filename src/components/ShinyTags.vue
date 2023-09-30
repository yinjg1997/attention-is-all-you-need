<script setup lang="ts"></script>

<template>
  <div class="p-10 flex gap-x-3">
    <span
      class="tag bg-zinc-900 "
    >
      Plus
    </span>

    <span
      class="tag bg-gradient-to-t from-teal-400 to-blue-700"
    >
      Pro
    </span>

    <span
      class="tag bg-gradient-to-b from-indigo-500 to-fuchsia-300"
    >
      Ultra
    </span>
  </div>
</template>

<style scoped>
.tag {
  @apply inline-block w-[82px] h-[34px] pt-1 pb-1 pl-[15px] pr-[15px] rounded -skew-x-12 text-white text-xl text-center;
}
</style>
