<script setup lang="ts">
import { routes } from "../router/index.ts";
</script>
<template>
  <div class="flex h-screen w-screen">
    <!-- left -->
    <div
      class="flex h-full min-w-[200px] flex-col items-center bg-indigo-200 p-[1rem]"
    >
      <div class="flex flex-col gap-y-[1rem] overflow-y-scroll">
        <template v-for="route of routes[0].children" :key="route.name">
          <router-link :to="{ name: route.name }">
            {{ route.name }}
          </router-link>
        </template>
      </div>
    </div>
    <!-- right -->
    <div class="w-full h-full grow p-[1rem] overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
