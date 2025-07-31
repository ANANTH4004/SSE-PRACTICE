class Node {
  constructor(value) {
    this.data = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  append(element) {
    const newNode = new Node(element)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  prepand(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index == 0) {
      this.prepand(value)
    } else if (index === this.size) {
      this.append(value)
    } else {
      const newNode = new Node(value)
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }
      newNode.next = curr.next
      curr.next = newNode
      this.size++
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return
    }
    if (index == 0) {
      this.head = this.head.next
    } else {
      let curr = this.head
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }
      const removedNode = curr.next
      curr.next = removedNode.next
      if (index === this.size - 1) {
        this.tail = curr
      }
      removedNode.next = null
    }
    this.size--
  }

  [Symbol.iterator]() {
    let curr = this.head
    return {
      next: () => {
        if (curr) {
          let value = curr.data
          curr = curr.next
          return { value, done: false }
        } else return { done: true }
      },
    }
  }
}

const list = new LinkedList()

console.log(list.isEmpty())

list.prepand(10)
list.prepand(20)
list.prepand(30)
list.append(40)
list.append(50)
list.insert('meodan', 3)
list.insert('meodan', 6)
list.insert('meodan', 7)
list.insert('meodan', 8)
list.insert('meodan', 9)
list.remove(2)
console.log(list.getSize())
for (let ll of list) {
  console.log(ll)
}
console.log(JSON.stringify(list))
