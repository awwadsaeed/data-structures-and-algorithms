'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    peek() {
        if (!this.top) {
            try {
                throw new Error('cant find the peek of an empty stack');
            } catch (e) {
                return e.message;
            }
        }
        return this.top.value;
    }
    push(value) {
        try {
            if (value == undefined) {
                throw new Error(`cannot insert ${value} into the list`);
            }
            let addNode = new Node(value);
            if (!this.top) {
                this.top = addNode;
            } else {
                addNode.next = this.top;
                this.top = addNode;
            }
        } catch (e) {
            console.error(e);
        }
    }
    pop() {
        try {
            if (!this.top) {
                throw new Error('cant pop off an empty stack');
            }
            let temp=this.top;
            this.top=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    isEmpty(){
        if (!this.top) {
            return true;
        }else{
            return false;
        }  
    }

}


class Queue{
    constructor(){
        this.top=null;
        this.last=null;
    }
    peek() {
        if (!this.top) {
            try {
                throw new Error('cant find the peek of an empty queue');
            } catch (e) {
                return e.message;
            }
        }
        return this.top.value;
    }
    enqueue(value) {
        try {
            let node1 = new Node(value);
            if (!this.top) {
                this.top = node1;
                this.last=node1;
            }else{
                this.last.next=node1;
                this.last=node1;
            }
        } catch (e) {
            console.error(e);
        }
    }
    dequeue(){
        try {
            if (!this.top) {
                throw new Error('cant dequeue an empty queue');
            }
            let temp=this.top;
            this.top=temp.next;
            temp.next=null;
            return temp.value;      
        } catch (e) {
            return e.message;
        }
    }
    isEmpty(){
        if (!this.top) {
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