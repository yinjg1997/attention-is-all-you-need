<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-screen">
    <div
      class="flex h-full min-w-[200px] flex-col items-center bg-indigo-200 p-[1rem]"
    >
      <div>
        <router-link :to="{ name: 'ExpandingCards' }">
          {{ 'ExpandingCards' }}
        </router-link>
      </div>
    </div>
    <div class="h-full grow overflow-hidden p-[1rem]">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
