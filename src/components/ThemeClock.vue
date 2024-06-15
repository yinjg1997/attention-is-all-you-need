<script setup lang="ts">
import { GithubOutlined, AppleOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue";
import {ref} from "vue";

const isDark = ref(false) // 当前的主题色
</script>

<template>
  <div id="wrap" class="relative flex flex-col items-center w-full h-full bg-[#fcfbfe]">
    <!-- header -->
    <div class="w-full bg-[#fff] pb-[16px] border-b">
      <div
        class="shrink-0 flex justify-between items-center w-[86%] h-[44px] ml-auto mr-auto text-[28px]"
      >
        <div class="inline-flex items-center text-[var(--font-color)]">
          <apple-outlined />
          <span class="ml-1">Gusto</span>
        </div>
        <github-outlined />
      </div>
    </div>
    <!-- content -->
    <div
      class="flex flex-col items-center gap-y-6 w-full pt-[44px] overflow-y-scroll"
    >
      <template v-for="item in 3">
        <div class="w-[88%] bg-[#ffffff] p-[16px] border rounded-2xl shadow-md">
          <div id="post1"></div>
          <h1>Quite possible.<a href="#post1" class="fas fa-hashtag"></a></h1>
          <p>
            Oh, I think we should just stay friends. Yeah, I do that with my
            stupidness. Oh, how I wish I could believe or understand that!
            There's only one reasonable course of action now: kill Flexo! Well
            I'da done better, but it's plum hard pleading a case while awaiting
            trial for that there incompetence.
          </p>
          <p>
            I suppose I could part with 'one' and still be feared… Check it out,
            y'all. Everyone who was invited is here. Bender, we're trying our
            best. <a href="#">Guess again.</a> This is the worst kind of
            discrimination: the kind against me!
          </p>
          <h2>Incidentally, you have a dime up your nose.</h2>
          <ul>
            <li>Anyone who laughs is a communist!</li>
            <li>
              Alright, let's mafia things up a bit. Joey, burn down the ship.
              Clamps, burn down the crew.
            </li>
            <li>Ven ve voke up, ve had zese wodies.</li>
          </ul>
          <p>
            You guys aren't Santa! You're not even robots. How dare you lie in
            front of Jesus? <i>I don't 'need' to drink.</i> I can quit anytime I
            want! Too much work. Let's burn it and say we dumped it in the
            sewer. Shinier than yours, meatbag.
          </p>
        </div>
      </template>
    </div>
    <!-- dark btn -->
    <div class="dark-btn absolute flex justify-center items-center left-[16px] bottom-[16px] w-[64px] h-[64px]
    rounded-full border border-[var(--border-color)] cursor-pointer text-[24px]"
         @click="isDark = !isDark"
    >
      <eye-outlined v-if="isDark" />
      <eye-invisible-outlined v-else />
    </div>
  </div>
  <div class="clip"></div>
</template>

<style scoped lang="less">
[mode="dark"] #wrap {
  --font-color: #BF263C;
  //--font-color: #f5f7fa;
  --border-color: #BF263C;
}

#wrap {
  --font-color: #323133;
  --border-color: #BF263C;
}

.dark-btn {
  box-shadow: 0 0 12px 0 var(--border-color);
}


</style>
