import { reactive } from 'vue'

function detectPlatform() {
  const userAgent = navigator.userAgent

  if (/mobile/i.test(userAgent)) {
    return {
      isMobile: true,
      isWeb: false,
      isTablet: false
    }
  } else if (/tablet/i.test(userAgent)) {
    return {
      isMobile: false,
      isWeb: false,
      isTablet: true
    }
  } else {
    return {
      isMobile: false,
      isWeb: true,
      isTablet: false
    }
  }
}

export const browserDetectPlugin = {
  install: function (app) {
    const currentPlatform = reactive(detectPlatform())
    app.config.globalProperties.$platform = currentPlatform

    window.addEventListener('resize', () => {
      const newPlatform = detectPlatform()

      if (newPlatform !== currentPlatform) {
        Object.assign(currentPlatform, newPlatform)
      }
    })

    window.addEventListener('orientationchange', () => {
      const newPlatform = detectPlatform()

      if (newPlatform !== currentPlatform) {
        Object.assign(currentPlatform, newPlatform)
      }
    })
  }
}
