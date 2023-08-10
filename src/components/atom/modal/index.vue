<template>
  <teleport to="#dialog">
    <transition>
      <div class="modal-wrapper" v-if="isOpen">
        <div ref="modal" class="modal" :style="{ '--max-width': maxWidth }">
          <div class="modal__top">
            <h4 class="modal__title">{{ title }}</h4>
            <div @click="onClose" class="modal__icon"></div>
          </div>
          <div class="modal__content">
            <slot name="content" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'

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

const emit = defineEmits(['close'])
const onClose = () => emit('close')

onMounted(() => {
  window.addEventListener('click', (e) => {
    if (modal.value && !modal.value.contains(e.target)) {
      onClose()
    }
  })
})

onBeforeUnmount(() => {
  window.addEventListener('click', (e) => {
    if (modal.value && !modal.value.contains(e.target)) {
      onClose()
    }
  })
})

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      document.body.style.cssText = `
				  overflow: hidden;
          padding-right: ${window.innerWidth - document.documentElement.clientWidth}px;
        `
    } else {
      setTimeout(() => {
        document.body.removeAttribute('style')
      }, 250)
    }
  }
)
</script>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.modal {
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 220px;
  width: 100%;
  max-width: var(--max-width);

  @media (max-width: 360px) {
    max-width: 90vw;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid rgba(189, 199, 206, 0.3);
  }

  &__icon {
    position: relative;
    width: 24px;
    height: 24px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #272526;
    }

    &::before {
      transform: translateY(-50%) rotate(-45deg);
    }

    &::after {
      transform: translateY(-50%) rotate(45deg);
    }
  }

  &__content {
    flex: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 55px 16px 16px;
    line-height: 1.2;
    font-size: 20px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  transform: scale(1.1);
  opacity: 0;
}
</style>
