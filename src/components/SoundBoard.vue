<script setup lang="ts">
const sounds = [
  '/sounds/applause.mp3',
  '/sounds/boo.mp3',
  '/sounds/gasp.mp3',
  '/sounds/tada.mp3',
  '/sounds/victory.mp3',
  '/sounds/wrong.mp3'
]

const audio = new Audio()
const playSound = (soundPath: string) => {
  audio.src = soundPath
  audio.play()
}
</script>

<template>
  <div class="w-full h-full flex flex-wrap justify-center items-center gap-x-6 bg-purple-500">
    <template v-for="soundPath of sounds">
      <button class="w-[120px] h-[62px] bg-purple-800 rounded-lg hover:opacity-90"
              @click="playSound(soundPath)"
      >
        <span class="text-white">
          {{ soundPath.split('/').pop()?.split('.')[0] }}
        </span>
      </button>
    </template>
  </div>
</template>

<style scoped>

</style>