<template>
  <greeting />
  <event-details />
  <schedule />
  <dress-code />
  <notes />
<!--  <attendee-info />-->
</template>

<script setup>
import Greeting from '@/components/templates/greeting/index.vue'
import EventDetails from '@/components/templates/event-details/index.vue'
import Schedule from '@/components/templates/schedule/index.vue'
import DressCode from '@/components/templates/dress-code/index.vue'
import Notes from '@/components/templates/notes/index.vue'
// import AttendeeInfo from '@/components/templates/attendee-info/index.vue'
</script>

<style scoped lang="scss">
section {
  &:not(:last-child) {
    margin-bottom: 40px;
  }
}
</style>
