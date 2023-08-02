<template>
  <!--  <marquee class="marquee">Приглашение</marquee>-->
  <div class="marquee">
    <p class="marquee__content">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ""
  }
})
</script>

<style scoped lang="scss">
.marquee {
  text-align: right;
  overflow: hidden;

  &__content {
    position: relative;
    white-space: nowrap;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 600;
    animation: text 5s infinite linear;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #000;
      transform: translate(0, -50%);
    }

    &::before {
      left: -10px;
    }

    &::after {
      right: -10px;
    }

    @keyframes text {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-150%, 0);
      }
    }
  }
}

</style>
