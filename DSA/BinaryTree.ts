class TNode {
  value: number
  left: TNode | null
  right: TNode | null
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  root: TNode | null
  constructor() {
    this.root = null
  }

  isEmpty(): boolean {
    return this.root === null
  }

  private insertNode(root: TNode, newNode: TNode) {
    if (root.value > newNode.value) {
      if (root.left == null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right == null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  insert(value) {
    const newNode = new TNode(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root!, newNode)
    }
  }

  private searchNode(root: TNode | null, value: number) {
    if (!root) return false
    if (root.value == value) return true
    else if (root.value > value) {
      return this.searchNode(root.left, value)
    } else {
      return this.searchNode(root.right, value)
    }
  }

  search(value: number) {
    if (this.isEmpty()) {
      return false
    } else {
      return this.searchNode(this.root!, value)
    }
  }

  //depth first search Pre-Order
  preOrder(root: TNode | null = this.root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root: TNode | null = this.root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root: TNode | null = this.root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

bst.inOrder()
