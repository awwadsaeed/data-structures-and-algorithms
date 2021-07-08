'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(linkedList) {
        this.storage = linkedList;
    }
    peek() {
        if (!this.storage.head) {
            try {
                throw new Error('cant find the peek of an empty stack');
            } catch (e) {
                return e.message;
            }
        }
        return this.storage.head.value;
    }
    push(value) {
        try {
            if (value == undefined) {
                throw new Error(`cannot insert ${value} into the list`);
            }
            let addNode = new Node(value);
            if (!this.storage.head) {
                this.storage.head = addNode;
            } else {
                addNode.next = this.storage.head;
                this.storage.head = addNode;
            }
        } catch (e) {
            console.error(e);
        }
    }
    pop() {
        try {
            if (!this.storage.head) {
                throw new Error('cant pop off an empty stack');
            }
            let temp=this.storage.head;
            this.storage.head=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    isEmpty(){
        if (!this.storage.head) {
            return true;
        }else{
            return false;
        }  
    }

}


class Queue{
    constructor(linkList){
        this.storage=linkList;
    }
    peek() {
        if (!this.storage.head) {
            try {
                throw new Error('cant find the peek of an empty queue');
            } catch (e) {
                return e.message;
            }
        }
        return this.storage.head.value;
    }
    enqueue(value) {
        try {
            let node1 = new Node(value);
            if (!this.storage.head) {
                this.storage.head = node1;
                this.storage.rear=node1;
            }else{
                this.storage.rear.next=node1;
                this.storage.rear=node1;
            }
        } catch (e) {
            console.error(e);
        }
    }
    dequeue(){
        try {
            if (!this.storage.head) {
                throw new Error('cant dequeue an empty queue');
            }
            let temp=this.storage.head;
            this.storage.head=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    isEmpty(){
        if (!this.storage.head) {
            return true;
        }else{
            return false;
        }  
    }


}
module.exports={
    Stack,
    Queue,
}