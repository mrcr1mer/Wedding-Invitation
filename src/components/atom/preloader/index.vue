<template>
  <div class="preloader">
    <div class="preloader__circle">
      <div class="preloader__spinner"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#000'
  }
})
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  z-index: 1000;
}

.loaded .preloader {
  transition: all 0.7s ease;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
}

.preloader__circle {
  position: relative;
  height: 60px;
  width: 60px;
}

.preloader__spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  border: 7px solid v-bind(color);
  border-top-color: transparent;
  border-radius: 50%;
  animation: preloaderRotate 1s linear infinite;
}

@keyframes preloaderRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
