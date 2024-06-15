<script setup lang="ts">
import {ref} from "vue";

const active = ref(false)
</script>

<template>
  <!--<a-collapse>-->
  <!--  <a-collapse-panel key="1" header="This is panel header 1">-->
  <!--    &lt;!&ndash;<p>{{ 123 }}</p>&ndash;&gt;-->
  <!--  </a-collapse-panel>-->
  <!--</a-collapse>-->

  <div class="flex flex-col items-center w-full h-full bg-purple-400" @click="active = !active">
    <div class="w-[420px] border border-solid border-[red] rounded-2xl overflow-hidden">
      <div class="text-[22px] border border-solid border-[red]">title</div>
      <div v-if="active" class="min-h-[20px]">
        <!--content-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo {
  transition: all 1.3s;
}

</style>