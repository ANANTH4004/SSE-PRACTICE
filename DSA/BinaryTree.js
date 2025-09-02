var TNode = /** @class */ (function () {
    function TNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.isEmpty = function () {
        return this.root === null;
    };
    BinarySearchTree.prototype.insertNode = function (root, newNode) {
        if (root.value > newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            }
            else {
                this.insertNode(root.left, newNode);
            }
        }
        else {
            if (root.right == null) {
                root.right = newNode;
            }
            else {
                this.insertNode(root.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TNode(value);
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinarySearchTree.prototype.searchNode = function (root, value) {
        if (!root)
            return false;
        if (root.value == value)
            return true;
        else if (root.value > value) {
            return this.searchNode(root.left, value);
        }
        else {
            return this.searchNode(root.right, value);
        }
    };
    BinarySearchTree.prototype.search = function (value) {
        if (this.isEmpty()) {
            return false;
        }
        else {
            return this.searchNode(this.root, value);
        }
    };
    //depth first search Pre-Order
    BinarySearchTree.prototype.preOrder = function (root) {
        if (root === void 0) { root = this.root; }
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    };
    BinarySearchTree.prototype.inOrder = function (root) {
        if (root === void 0) { root = this.root; }
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    };
    BinarySearchTree.prototype.postOrder = function (root) {
        if (root === void 0) { root = this.root; }
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.inOrder();
