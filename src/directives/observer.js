export const animateDirective = (el, binding) => {
  binding.modifiers.title ? el.classList.add('_anim-title') : el.classList.add('_anim-text')

  const observer = new IntersectionObserver(
    ([ entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('_animate')
        observer.unobserve(entry.target)
        setTimeout(() => {
          binding.modifiers.title
            ? entry.target.classList.remove('_anim-title')
            : entry.target.classList.remove('_anim-text')
          entry.target.classList.remove('_animate')
        }, 1000)
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(el)
}
