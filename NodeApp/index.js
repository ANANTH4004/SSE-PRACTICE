new Promise((resolve, reject) => {
  console.log('Promise started')
  resolve('Promise resolved')
}).then((message) => {
  console.log(message)
})
// This is a comment to indicate the end of the promise chain
setTimeout(() => {
  console.log('inside setTimeout')
}, 0)
setImmediate(() => {
  console.log('inside setImmediate')
})
