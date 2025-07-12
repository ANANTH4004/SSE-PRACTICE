console.log('This is the dev.js file for development purposes')

let a = ['apple', 'banana', 'cherry']

a.sort((x, y) => {
  return y.localeCompare(x)
})

console.log(a)
