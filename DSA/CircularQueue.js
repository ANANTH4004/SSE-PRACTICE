class CircularQueue {
  #items
  constructor(capacity) {
    this.#items = new Array(capacity)
    this.capacity = capacity
    this.front = -1
    this.rear = -1
    this.currentLength = 0
  }

  isFull() {
    return this.capacity === this.currentLength
  }

  isEmpty() {
    this.currentLength === 0
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.#items[this.rear] = element
      this.currentLength++
      if (this.front == -1) {
        this.front = this.rear
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const item = this.#items[this.front]
    this.#items[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength--
    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }
    return item
  }

  peek() {
    return this.isEmpty() ? null : this.#items[this.front]
  }

  [Symbol.iterator]() {
    let count = 0
    let index = this.front % this.capacity
    return {
      next: () => {
        if (count == this.currentLength) {
          return { done: true }
        } else {
          const value = this.#items[index]
          index = (index + 1) % this.capacity
          count++
          return { value, done: false }
        }
      },
    }
  }
}

const queue = new CircularQueue(5)
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.enqueue(60)
queue.enqueue(70)

console.log(queue.isFull())
console.log(queue)

for (const cq of queue) {
  console.log(cq)
}
