function filterEle(value) {
  console.log('Filtering elements...', value)
  const itemList = document.querySelectorAll('.item')
  console.log('Item list:', itemList)

  itemList.forEach((item) => {
    const originalText = item.textContent
    if (value.trim() === '') {
      item.innerHTML = originalText
      item.style.display = 'block'
    } else {
      if (originalText.toLowerCase().includes(value.toLowerCase())) {
        const regex = new RegExp(`(${value})`, 'ig') // case-insensitive match
        const highlightedText = originalText.replace(
          regex,
          `<span class="highlight">$1</span>`
        )
        item.innerHTML = highlightedText
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    }
  })
}

function debounceTime(func, delay) {
  console.log(`Debouncing function with delay`)
  let timeout
  return function (...args) {
    console.log('Filtered at', Date.now())
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
const debouncedFilter = debounceTime(filterEle, 300)
document.getElementById('filter-input').addEventListener('input', (e) => {
  debouncedFilter(e.target.value)
})
