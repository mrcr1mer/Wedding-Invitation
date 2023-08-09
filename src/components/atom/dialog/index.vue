<template>
  <teleport to='#dialog'>
    <transition>
      <div class="wrapper" v-if="isOpen">
        <div class="base-modal" ref="modal" :style="{'--max-width':maxWidth}">
          <div class="top">
            <div class="title">{{ title }}</div>
            <div class="top__icon">
              <icon name="close" style="cursor: pointer" @click="onClose"/>
            </div>
          </div>
          <div class="content" v-if="hasContent">
            <slot name="content"/>
          </div>
          <div class="footer" v-if="hasFooter">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import {computed, ref, useSlots, watch} from "vue";
import {onClickOutside} from "@vueuse/core";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: '360px'
  }
})


const modal = ref(null)
const emit = defineEmits(['update:isOpen', 'close', 'open'])
const slots = useSlots()
onClickOutside(modal, () => onClose())

const onClose = () => {
  emit('update:isOpen', false)
  emit('close')
}

const onClick = () => {
  emit('update:isOpen', true)
  emit('open')
}

const hasSlot = (name) => {
  return !!slots[name];
}

const hasFooter = computed(() => {
  return hasSlot('footer')
})
const hasContent = computed(() => {
  return hasSlot('content')
})
const hasActivator = computed(() => {
  return hasSlot('activator')
})


watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.documentElement.style.cssText = `
				  overflow: hidden;
          padding-right: ${
        window.innerWidth - document.documentElement.clientWidth
      }px;
        `
    } else {
      setTimeout(() => {
        document.documentElement.removeAttribute('style')
      }, 250)
    }
  }
)
</script>

<style scoped lang="scss">
.base-modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 360px;
  //min-height: 280px;
  max-width: var(--max-width);
}

.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6196078431);
  z-index: 1;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(189, 199, 206, 0.3);

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  &__icon {
    display: flex;
  }
}

.content {
  padding: 16px 24px;
  text-align: center;
}

.footer {
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  transform: scale(1.1);
  opacity: 0;
}

</style>
