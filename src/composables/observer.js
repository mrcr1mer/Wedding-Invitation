import { onMounted } from "vue"

export const useIntersectionObserver = () => {
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_animate')
        observer.unobserve(entry.target)
        setTimeout(() => {
          entry.target.classList.remove('_animate')
          entry.target.classList.remove('_anim-item')
        }, 1000)
      }
    })
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  onMounted(() => {
    const observer = new IntersectionObserver(callback, options)

    const animItems = document.querySelectorAll('._anim-item')
    animItems.forEach((animItem) => {
      observer.observe(animItem)
    })
  })
}

