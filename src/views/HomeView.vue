<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-screen">
    <div
      class="flex h-full min-w-[200px] flex-col items-center bg-indigo-200 p-[1rem]"
    >
      <div class="flex flex-col gap-y-[1rem]">
        <router-link :to="{ name: 'ExpandingCards' }">
          {{ "ExpandingCards" }}
        </router-link>
        <router-link :to="{ name: 'ProgressStep' }">
          {{ "ProgressStep" }}
        </router-link>
        <router-link :to="{ name: 'RotationNavAnimation' }">
          {{ "RotationNavAnimation" }}
        </router-link>
      </div>
    </div>
    <div class="w-full h-full grow p-[1rem] overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
