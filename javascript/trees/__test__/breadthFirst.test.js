'use strict';
const Node = require('../trees').Node;
const BinaryTree = require('../trees').BinaryTree;
const breadthFirst = require('../trees').breadthFirst;

describe('breadth first traversal test', () => {
    let bi = new BinaryTree();
    let node1 = new Node(1);
    let node2 = new Node(0);
    let node3 = new Node(2);
    let node4 = new Node(15);
    let node5 = new Node(5);
    let node6 = new Node(70);
    let node7 = new Node(35);
    let node8 = new Node(7);
    let node9 = new Node(3);
    
    bi.root=node1;
    bi.root.left=node2;
    bi.root.right=node3;
    bi.root.left.left=node4;
    bi.root.left.right=node5;
    bi.root.right.left=node6;
    bi.root.right.right=node7;
    bi.root.left.left.left=node8;
    bi.root.left.left.right=node9;
    test('happy path', () => {
        expect(breadthFirst(bi)).toStrictEqual([1, 0, 2, 15, 5, 70, 35, 7, 3]);
    })
    test('fail', () => {
        let bi2 = new BinaryTree();
        expect(breadthFirst(bi2)).toStrictEqual('cant traverse an empty tree');
    })
})