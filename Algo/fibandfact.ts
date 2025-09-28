function fib(n: number): number[] {
  const result = [0, 1]
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }
  return result
}

console.log('fibbonocci of 10 ', fib(10))

function factorial(n: number): number {
  let result = 1
  for (let i = 2; i < n; i++) {
    result = result * i
  }
  return result
}

console.log('factorial of 5 ', factorial(5))

function isPrime(n: number): boolean {
  if (n < 2) return false
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) return false
  }
  return true
}

console.log('is Prime 10 ', isPrime(10))
console.log('is Prime 10 ', isPrime(7))
console.log('is Prime 10 ', isPrime(345467))

function isPowerOfTwo(n: number): boolean {
  if (n < 1) return false
  while (n > 1) {
    if (n % 2 !== 0) return false
    n = n / 2
  }
  return true
}

console.log('isPowerOfTwo 10 ', isPowerOfTwo(10))
console.log('isPowerOfTwo ', isPowerOfTwo(16))
console.log('isPowerOfTwo', isPowerOfTwo(1))

function recursionFib(n: number) {
  if (n < 2) return n
  return recursionFib(n - 1) + recursionFib(n - 2)
}

console.log('fibbonocci of 10 ', recursionFib(10))
