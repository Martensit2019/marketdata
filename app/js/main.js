const advantagesHeads = Array.from(document.querySelectorAll('[data-acc]'))
console.log('advantagesHeads->', advantagesHeads.length)
if (advantagesHeads.length > 0) {
  advantagesHeads.forEach((item) => {
    let content = item.nextElementSibling
    item.addEventListener('click', () => {
      item.classList.toggle('accordion__head--active')
      content.style.paddingTop = 0 + 'px'
      content.style.paddingBottom = 0 + 'px'
      if (content.style.height) {
        content.style.height = null
      } else {
        content.style.height = content.scrollHeight + 'px'
      }
    })
  })
}
