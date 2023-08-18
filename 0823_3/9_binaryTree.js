//binary tree

class Node {
    constructor(value) {
        this.value = value,
        this.left = null,
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    add(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return
        }

        let currentNode = this.root

        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode
                    return
                }
                currentNode = currentNode.left
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode
                    return
                }
                currentNode = currentNode.right
            }
        }
    }

    preOrder(node, callback) {
        if (!node) return

        if (callback) callback(node)
        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
    }

    inOrder(node, callback) {
        if (!node) return

        this.preOrder(node.left, callback)
        if (callback) callback(node)
        this.preOrder(node.right, callback)
    }

    postOrder(node, callback) {
        if (!node) return

        this.preOrder(node.left, callback)
        this.preOrder(node.right, callback)
        if (callback) callback(node)
    }

    traverseDepth(callback, method) {
        if (method === 'preOrder') this.preOrder(this.root, callback)
        if (method === 'inOrder') this.inOrder(this.root, callback)
        if (method === 'postOrder') this.postOrder(this.root, callback)
    }

    traverseWide(callback) {
        const queue = [this.root]

        while (queue.length) {
            const node = queue.shift()
            callback(node)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
}

const myBinaryTree = new BinaryTree()

myBinaryTree.add(8)
myBinaryTree.add(7)
myBinaryTree.add(9)
myBinaryTree.add(5)
myBinaryTree.add(10)
myBinaryTree.add(20)
myBinaryTree.add(6)
myBinaryTree.add(2)
myBinaryTree.add(11)

console.log(' ')
myBinaryTree.traverseDepth((node) => console.log(node.value), 'preOrder')
console.log(' ')
myBinaryTree.traverseDepth((node) => console.log(node.value), 'inOrder')
console.log(' ')
myBinaryTree.traverseDepth((node) => console.log(node.value), 'postOrder')

console.log(' ')
myBinaryTree.traverseWide((node) => console.log(node.value))