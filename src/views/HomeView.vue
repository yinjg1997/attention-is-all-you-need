<script setup lang="ts">
import {routes} from "../router/index.ts";
import {
  onMounted,
  ref
} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute()
const selectedMenu = ref(0);

const handleSelectedMenu = (index: number) => {
  selectedMenu.value = index
  router.push({name: routes[0].children[selectedMenu.value].name});
}

onMounted(() => {
  const location = route.name
  const selectedKey = routes[0].children.findIndex((route) => route.name === location)
  handleSelectedMenu(selectedKey)
})

</script>
<template>
  <div class="flex h-screen w-screen">
    <!-- left -->
    <div
        class="flex h-full min-w-[200px] flex-col items-center bg-[#f1f5f9] p-[1rem]"
    >
      <div class="flex flex-col gap-y-[1rem] overflow-y-scroll">
        <template
            v-for="(route, index) of routes[0].children"
            :key="route.name"
        >
          <span
              class="min-h-[32px] rounded pl-2 leading-[32px] cursor-pointer hover:bg-[#0000000d] hover:text-purple-600 transition-all"
              :class="[
              selectedMenu === index ? 'bg-[#0000000d] text-purple-600' : '',
            ]"
              @click="handleSelectedMenu(index)"
          >
            {{ route.name }}
          </span>
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
