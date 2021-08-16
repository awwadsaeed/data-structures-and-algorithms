class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    constructor(root) {
        this.root = null;
    }
    preOrder() {
        const result = [];
        const _move = (node) => {
            result.push(node.value);
            if (node.left) _move(node.left);
            if (node.right) _move(node.right);
        };
        _move(this.root);
        return result;
    }
    postOrder() {
        const result = [];
        const _move = (node) => {
            if (node.left) _move(node.left);
            if (node.right) _move(node.right);
            result.push(node.value);
        };
        _move(this.root);
        return result;
    }
    inOrder() {
        const result = [];
        const _move = (node) => {
            if (node.left) _move(node.left);
            result.push(node.value);
            if (node.right) _move(node.right);
        };
        _move(this.root);
        return result;
    }
    getMax() {
        if (this.root == null) {
            return ('cant get max of an empty tree');
        }
        let max = this.root.value;
        const _check = (node) => {
            if (node.value >= max) {
                max = node.value
            }
            if (node.left) _check(node.left);
            if (node.right) _check(node.right);
        }
        _check(this.root);
        return max;
    }
}
class BinarySearchTree extends BinaryTree {
    constructor(root) {
        super(root);
    }
    add(value) {
        let node = new Node(value);
        let curr = this.root;
        const _add = (node) => {
            if (!this.root) {
                this.root = node;
                return node;
            } else if (node.value > curr.value) {
                if (curr.right) {
                    curr = curr.right;
                    _add(node)
                } else {
                    curr.right = node;
                }
            } else if (node.value < curr.value) {
                if (curr.left) {
                    curr = curr.left;
                    _add(node)
                } else {
                    curr.left = node;
                }
            }
        }
        _add(node);
    }
    constains(value) {
        let result = this.root.inOrder();
        if (result.constains(value)) {
            return true;
        }
        return false;
    }
}
function breadthFirst(tree) {
    let rootNode = tree.root;
    if (rootNode === null) {
      return 'cant traverse an empty tree';
    }
    let temp = [];
    let final = [];
    temp.push(rootNode);
    while (temp.length > 0) {
      let currentNode = temp[0];
      if (currentNode.left !== null) {
        temp.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        temp.push(currentNode.right)
      }
      final.push(temp.shift().value)
    }
    return final;
}

function repeated(tree1,tree2){
    let array1 = tree1.preOrder();
    let array2 = tree2.preOrder();
    let result = [];
    for(let i=0;i<array1.length;i++){
        if(array2.includes(array1[i])){
            result.push(array1[i]);
        }
    }
    return result;
}
module.exports = {
    Node,
    BinaryTree,
    BinarySearchTree,
    breadthFirst,
    repeated,
}