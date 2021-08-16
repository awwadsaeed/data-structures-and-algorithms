const Node = require('../trees').Node;
const BinaryTree = require('../trees').BinaryTree;
const BinarySearchTree = require('../trees').BinarySearchTree;
const repeated = require('../trees').repeated;
describe('tree test', () => {
    test('Can successfully instantiate an empty tree', () => {
        let tree = new BinaryTree();
        expect(tree instanceof BinaryTree).toBe(true);
    })
    test('Can successfully instantiate a tree with a single root node', () => {
        let tree = new BinaryTree();
        let head = new Node(1);
        tree.root = head;
        expect(tree.root.value).toBe(1);
        expect(tree.root.right).toBe(null);
        expect(tree.root.left).toBe(null);
    })
    test('Can successfully add a left child and right child to a single root node', () => {
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(15);
        expect(tree.root.value).toBe(10);
        expect(tree.root.right.value).toBe(15);
        expect(tree.root.left.value).toBe(5);
    })
    test('Can successfully return a collection from a preorder traversal', () => {
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.preOrder()).toEqual([10, 5, 3, 7, 15, 13, 17]);
        expect(tree.inOrder()).toEqual([3, 5, 7, 10, 13, 15, 17]);
        expect(tree.postOrder()).toEqual([3, 7, 5, 13, 17, 15, 10]);

    })
    test('Can successfully return a collection from a inorder traversal', () => {
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.inOrder()).toEqual([3, 5, 7, 10, 13, 15, 17]);

    })
    test('Can successfully return a collection from a postorder traversal', () => {
        let tree = new BinarySearchTree();
        tree.add(10);
        tree.add(5);
        tree.add(3);
        tree.add(7);
        tree.add(15);
        tree.add(13);
        tree.add(17);
        expect(tree.postOrder()).toEqual([3, 7, 5, 13, 17, 15, 10]);

    })

})
describe('gets the common node values in two binary trees', () => {
    test('gets the common node values in two binary trees', () => {
        let tree1 = new BinarySearchTree();
        let tree2 = new BinarySearchTree();
        tree1.add(10);
        tree1.add(5);
        tree1.add(3);
        tree1.add(7);
        tree1.add(15);
        tree1.add(13);
        tree1.add(17);
        tree2.add(10);
        tree2.add(5);
        tree2.add(3);
        tree2.add(7);
        tree2.add(15);
        tree2.add(13);
        tree2.add(17);
        expect(repeated(tree1, tree2)).toEqual([10, 5,3, 7, 15, 13, 17]);
    })
    test('gets the common node values in two binary trees', () => {
        let tree1 = new BinarySearchTree();
        let tree2 = new BinarySearchTree();
        tree1.add(10);
        tree1.add(5);
        tree1.add(3);
        tree1.add(7);
        tree1.add(15);
        tree1.add(13);
        tree1.add(5);
        tree2.add(10);
        tree2.add(5);
        tree2.add(3);
        tree2.add(7);
        tree2.add(15);
        tree2.add(13);
        tree2.add(17);
        expect(repeated(tree1, tree2)).toEqual([10, 5,3, 7, 15, 13]);
    })
    test('gets the common node values in two binary trees', () => {
        let tree1 = new BinarySearchTree();
        let tree2 = new BinarySearchTree();
        tree1.add(10);
        tree1.add(5);
        tree1.add(3);
        tree1.add(7);
        tree1.add(15);
        tree1.add(13);
        tree1.add(5);
        tree2.add(0);
        tree2.add(0);
        tree2.add(0);
        tree2.add(0);
        tree2.add(0);
        tree2.add(0);
        tree2.add(0);
        expect(repeated(tree1, tree2)).toEqual([]);
    })
})