// webp fallback for no js users
document.documentElement.classList.remove('no-js')

const faders = document.querySelectorAll('.card')
const appearOptions = {
  threshold: 1,
}
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

faders.forEach((fader) => {
  appearOnScroll.observe(fader)
})
