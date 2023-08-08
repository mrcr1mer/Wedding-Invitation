export const animateDirective = (el, binding) => {
  if (binding.modifiers.title) el.setAttribute('animate-title', 'animate title')
  else el.setAttribute('animate-text', 'animate text')

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_animate')
          observer.unobserve(entry.target)
          setTimeout(() => {
            binding.modifiers.title
              ? entry.target.removeAttribute('animate-title')
              : entry.target.removeAttribute('animate-text')
            entry.target.classList.remove('_animate')
          }, 1000)
        }
      })
    },
    { threshold: 1 }
  )

  observer.observe(el)
}
