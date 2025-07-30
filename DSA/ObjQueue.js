class Queue {
  constructor() {
    this.items = {}
    this.front = 0
    this.rear = 0
  }

  isEmpty() {
    return this.rear - this.front == 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++

    if (this.isEmpty()) {
      this.front = 0
      this.rear = 0
    }

    return item
  }

  peek() {
    return this.items[this.front]
  }
}

const queue = new Queue()

console.log(queue.dequeue())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.peek())
console.log(queue)
