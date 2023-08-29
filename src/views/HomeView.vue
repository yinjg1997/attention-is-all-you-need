<script setup lang="ts">
import { routes } from "../router/index.ts";
import {ref} from "vue";
const selectedMenu = ref(0)
</script>
<template>
  <div class="flex h-screen w-screen">
    <!-- left -->
    <div
      class="flex h-full min-w-[200px] flex-col items-center bg-[#f1f5f9] p-[1rem]"
    >
      <div class="flex flex-col gap-y-[1rem] overflow-y-scroll">
        <template v-for="(route, index) of routes[0].children" :key="route.name">
          <router-link :to="{ name: route.name }"
                       class="min-h-[32px] rounded pl-2 leading-[32px]"
                       :class="[selectedMenu === index ? 'bg-[#0000000d] text-purple-600' : '']"
                       @click="selectedMenu = index">
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
