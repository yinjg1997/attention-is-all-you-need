<script setup lang="ts">
</script>

<template>
  <div class="flex gap-x-8 w-full h-full bg-[#edf0f4] rounded-xl p-8">
    <button class="btn bg-[rgba(252,145,83,1)] border border-[rgba(252,145,83,1)] transition-all
    hover:bg-[rgba(252,145,83,0.8)] hover:border-[rgba(252,145,83,0.8)]
    active:bg-[#fc9153] active:border-[#fc9153]">
      <span class="text-white text-[14px]">Primary</span>
    </button>

    <button class="btn btn-gradient bg-white">
      <span class="text-[#081735] text-[14px]">Primary</span>
    </button>

    <button class="btn btn-boom bg-[#ff0081]">
      <span class="text-white text-[14px]">Primary</span>
    </button>

    <button class="btn bg-[rgb(5,199,170)] hover:bg-[rgba(5,199,170,0.8)]
    active:scale-95 transition-all">
      <span class="text-white text-[14px]">Primary</span>
    </button>

  </div>
</template>

<style scoped lang="less">
root {
  --bg-color: #edf0f4;
  --primary-color: rgba(252,145,83, 1);
  --font-color: #081735;
  --bg-hover-color: #FAFFFE;
}

.btn {
  height: 34px;
  padding: 4px 15px;
  border-radius: 4px;
}

//
.btn-gradient {
  position: relative;
  border: 1px solid transparent;
  background-image: linear-gradient(to right, white, white), linear-gradient(to bottom, rgba(24,82,232,1), rgba(23,228,196,1));
  background-clip: padding-box, border-box;
  background-origin: padding-box,border-box;

  &:hover {
    background-image: linear-gradient(to right, #FAFFFE, #FAFFFE), linear-gradient(to bottom, rgba(24,82,232,1), rgba(23,228,196,1));
    background-clip: padding-box, border-box;
    background-origin: padding-box,border-box;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: all ease-in-out .7s;
    opacity: 0;
    box-shadow: 0 0 0 10px rgba(23,228,196,1);
  }

  &:active::after {
    opacity: .8;
    box-shadow: none;
    transition: 0s;
  }
}

// btn-boom
.btn-boom {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 18px 4px rgba(255,56,142,.4);

  &::before {
    z-index: -1;
    content: '';
    position: absolute;
    inset: -8px;

    background-repeat: no-repeat;
    background-image: radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
      /*  */
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%),
    radial-gradient(circle, #ff0081 20%, transparent 20%);
    background-position:
        5% 44%,
        -5% 20%,
        7% 5%,
        23% 0,
        37% 0,
        58% -2%,
        80% 0%,
        100% -2%,
        -5% 80%,
        100% 55%,
        2% 100%,
        23% 100%,
        42% 100%,
        60% 95%,
        70% 96%,
        100% 100%;
    background-size: 0 0;
    transition: background-position .5s ease-in-out, background-size .75s ease-in-out;
  }

  &:active::before {
    content: '';
    transition:0s;
    background-size:
        40% 40%,
        50% 50%,
        45% 45%,
        50% 20%,
        48% 18%,
        40% 10%,
        45% 15%,
        40% 10%,
        48% 18%,
        45% 15%,
        50% 20%,
        48% 18%,
        50% 20%,
        45% 15%,
        40% 10%,
        50% 20%;
    background-position:
        18% 40%,
        20% 31%,
        30% 30%,
        40% 30%,
        50% 30%,
        57% 30%,
        65% 30%,
        80% 32%,
        15% 60%,
        83% 60%,
        18% 70%,
        25% 70%,
        41% 70%,
        50% 70%,
        64% 70%,
        80% 71%;
  }
}


</style>
