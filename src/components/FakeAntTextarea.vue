<script setup lang="ts">
import {computed, onMounted, onUpdated, ref} from "vue";

const props = withDefaults(defineProps<{
  minRow?: number
  maxRow?: number
  autoSize?: boolean
  getContainer?: HTMLElement
}>(), {
  minRow: 1,
  maxRow: 4,
  autoSize: false
})

// <<<<<<<<<<<<<<<<<<<<<<<<<<
const containerRef = ref<HTMLDivElement>()
const textareaRef = ref<HTMLTextAreaElement>()
const unitRowHeight = computed(() => {
  // @ts-ignore
  return window.getComputedStyle(textareaRef.value).fontSize.split('px')[0] * 1.5
})

onMounted(() => {
  console.log('mounted')
  textareaRef.value.rows = props.minRow
  minOrMaxHeight()
  autoAddHeight()
})

onUpdated(() => {
  console.log('onUpdated')
  minOrMaxHeight()
  autoAddHeight()
})

/**
 * 处理 input 事件
 */
const handleInput = () => {
  autoAddHeight()
}

const minOrMaxHeight = () => {
  const computedContainerRefStyle = window.getComputedStyle(containerRef.value)
  const computedTextareaRefStyle = window.getComputedStyle(textareaRef.value)

  textareaRef.value.style.minHeight = props.minRow * unitRowHeight.value
      + Number(computedTextareaRefStyle.paddingTop.slice(0, -2))
      + Number(computedTextareaRefStyle.paddingBottom.slice(0, -2))
      + 'px'


  if (props.autoSize) {
    textareaRef.value.style.maxHeight = Number(computedContainerRefStyle.height.slice(0, -2))
        - Number(computedContainerRefStyle.paddingBottom.slice(0, -2))
        - Number(computedContainerRefStyle.paddingTop.slice(0, -2))
        - Number(computedContainerRefStyle.borderWidth.slice(0, -2)) * 2
        + 'px'
  } else {
    textareaRef.value.style.maxHeight = Number(props.maxRow * unitRowHeight.value)
        + Number(computedTextareaRefStyle.paddingTop.slice(0, -2))
        + Number(computedTextareaRefStyle.paddingBottom.slice(0, -2))
        + 'px'
  }

  console.log('minOrMaxHeight')
}
/**
 * 自动增加 textareaRef 高度
 */
const autoAddHeight = () => {
  textareaRef.value.style.height = 'auto' // must
  textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px';
  console.log('autoAddHeight')
}
// >>>>>>>>>>>>>>>>>>>>>>>>>

const value = ref('')
</script>

<template>
  <div ref="containerRef" class="flex flex-col w-full h-full p-4 bg-purple-500">
    <textarea
        ref="textareaRef"
        class="w-full h-auto p-[8px] text-[12px] outline-0 rounded-lg"
        :placeholder="'feat: 在 autosize 激活时，支持传递一个容器，使 textarea 的最大高度不会超过该容器'"
        @input="handleInput"
    />

    <a-divider></a-divider>

    <a-textarea
        class="text-[22px] overflow-y-hidden"
        v-model:value="value"
        :placeholder="'ant-design-textarea'"
        :auto-size="true"
    />

    <!---->
    <!--<div class="bg-blue-300 h-full overflow-y-auto">-->
    <!--  <a-textarea-->
    <!--      class="text-[22px] overflow-y-hidden border-[4px]"-->
    <!--      v-model:value="value"-->
    <!--      :placeholder="'ant-design-textarea'"-->
    <!--      :auto-size="true"-->
    <!--  />-->
    <!--</div>-->


  </div>
</template>

<style scoped lang="less">
</style>