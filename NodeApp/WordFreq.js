const words =
  'Hello World This is a test Hello. again> a a a a test of the word frequency counter. Hello World!'
let freq = {}

const cleanWords = words.replace(/[^a-zA-Z\s]/g, '')
console.log('clean word', cleanWords)

cleanWords.split(' ').forEach((word) => {
  if (!freq[`${word}`]) {
    freq[`${word}`] = 1
  } else {
    freq[`${word}`] = freq[`${word}`] + 1
  }
})

//using map

const freqMap = new Map()

cleanWords.split(' ').forEach((word) => {
  const val = freqMap.get(`${word}`)
  if (val) {
    freqMap.set(`${word}`, val + 1)
  } else {
    freqMap.set(`${word}`, 1)
  }
})

console.log('fremap', freqMap)
