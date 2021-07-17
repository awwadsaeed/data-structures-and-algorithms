const Node = require('../trees').Node;
const BinaryTree = require('../trees').BinaryTree;
const BinarySearchTree = require('../trees').BinarySearchTree;

describe('tree test',()=>{
    test('Can successfully instantiate an empty tree',()=>{
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    })
    test('Can successfully instantiate a tree with a single root node',()=>{
        let tree = new BinaryTree();
        let head = new Node(1);
        tree.root=head;
        expect(tree.root.value).toBe(1);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    })
    test('Can successfully add a left child and right child to a single root node',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        expect(tree.root.value).toBe(10);
        expect(tree.root.right.value).toBe(15);
        expect(tree.root.left.value).toBe(5);
    })
    test('Can successfully return a collection from a preorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.preOrder()).toEqual([10,5,3,7,15,13,17]);
        expect(tree.inOrder()).toEqual([3,5,7,10,13,15,17]);
        expect(tree.postOrder()).toEqual([3,7,5,13,17,15,10]);

    })
    test('Can successfully return a collection from a inorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.inOrder()).toEqual([3,5,7,10,13,15,17]);

    })
    test('Can successfully return a collection from a postorder traversal',()=>{
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.postOrder()).toEqual([3,7,5,13,17,15,10]);

    })

})