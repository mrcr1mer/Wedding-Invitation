<template>
  <div class="container">
    <base-button type="submit" @click="clickButton" />
    <div style="background-color: #464646">
      <acceptable-colors :colors="colors" />
    </div>
    <card border-radius="20px" mark>
      <countdown-timer target-date="2023-08-27" />
      <scroll-marquee text="Приглашение"/>
    </card>
  </div>
</template>

<script setup>
import BaseButton from "@/components/atom/base-button"
import AcceptableColors from "@/components/atom/acceptable-colors"
import CountdownTimer from "@/components/atom/countdown-timer"
import ScrollMarquee from "@/components/atom/marquee"
import Card from "@/components/atom/card"

const clickButton = () => {
  console.log("123")
}

const colors = ["#fff", "#000"]
</script>

<style scoped lang="scss">
.container {
  max-width: 480px;
  margin-inline: auto;
}
</style>
