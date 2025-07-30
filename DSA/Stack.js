class Stack {
  constructor() {
    this.items = []
  }

  get size() {
    return this.items.length
  }
  pop() {
    if (this.items.length === 0) {
      return 'undefined'
    }
    return this.items.pop()
  }
  push(element) {
    this.items.push(element)
  }

  peek() {
    if (this.size == 0) {
      return 'undefined'
    }
    return this.items[this.size - 1]
  }

  clear() {
    this.items.length = 0
  }

  [Symbol.iterator]() {
    let index = this.items.length - 1
    return {
      next: () => {
        if (index >= 0) return { value: this.items[index--], done: false }
        else return { done: true }
      },
    }
  }
}

// Stack Example

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push({ name: 'anand' })
console.log('poping', stack.pop())

for (let s of stack) {
  console.log(s)
}
