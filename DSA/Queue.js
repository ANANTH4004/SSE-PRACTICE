class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.rear = null
    this.size = 0
  }

  isEmpty() {
    return this.size == 0
  }

  enqueue(element) {
    const newNode = new Node(element)
    if (this.isEmpty()) {
      this.front = newNode
      this.rear = newNode
    } else {
      this.rear.next = newNode
      this.rear = newNode
    }
    this.size++
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const removeNode = this.front
    this.front = this.front.next
    if (this.front == null) {
      this.rear = null
    }
    this.size--
    return removeNode.data
  }

  peek() {
    return this.front?.data ?? null // return this.front ? this.front.data : null;
  }

  [Symbol.iterator]() {
    let current = this.front
    return {
      next: () => {
        if (current == null) {
          return { done: true }
        } else {
          let value = current.data
          current = current.next
          return { value, done: false }
        }
      },
    }
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
console.log(queue)

for (q of queue) {
  console.log('inside for', q)
}

console.log(queue.peek())
