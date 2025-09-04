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

  insert(value: number) {
    const newNode = new TNode(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root!, newNode)
    }
  }

  private searchNode(root: TNode | null, value: number): boolean {
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

  min(root: TNode | null = this.root) {
    if (!root) return undefined
    while (root.left) {
      root = root.left
    }
    return root.value
  }

  delelteNode(node: TNode, value: number): TNode | null {
    if (node === null) {
      return node
    }
    if (value < node.value) {
      node.left = this.delelteNode(node.left!, value)
    } else if (value > node.value) {
      node.right = this.delelteNode(node.right!, value)
    } else {
      if (!node.right && !node.left) {
        return null
      } else if (!node.left) {
        return node.right
      } else if (!node.right) {
        return node.left
      }
      node.value = this.min(node.right)!
      node.right = this.delelteNode(node.right, node.value)
    }
    return node
  }
  delete(value: number) {
    this.root = this.delelteNode(this.root!, value)
  }
  //Breath first search
  levelOrderTravesal(root: TNode = this.root!) {
    //use optimized queue implementation
    const queue: TNode[] = []
    let curr: TNode | undefined
    queue.push(root)
    while ((curr = queue.shift())) {
      console.log(curr.value)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }
  // Minimum value of a tree
  // min(root: TNode = this.root!) {
  //   if (!root.left) {
  //     console.log('Minumum value ', root.value)
  //   } else {
  //     return this.min(root.left)
  //   }
  // }

  max(root: TNode = this.root!) {
    if (!root.right) {
      console.log('Maximum value ', root.value)
    } else {
      return this.max(root.right)
    }
  }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(95)
bst.insert(3)
bst.insert(7)

bst.inOrder()
bst.delete(10)
console.log('Minimum number of Tree is ', bst)
bst.inOrder()
bst.levelOrderTravesal()
bst.max()
