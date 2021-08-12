class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    getValue(key){
        let curr = this.head;
        let value=[];
        while(curr){
            if(Object.keys(curr.value).includes(key)){
                value.push(curr.value[key]);
            }
            curr=curr.next;
        }
        return value;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
    hash(key) {
        const sumCharCode = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    add(key, value) {
        const hash = this.hash(key);
        if (!this.storage[hash]) {
            const ll = new LinkedList();
            ll.prepend({ [key]: value });
            this.storage[hash] = ll;
        } else {
            this.storage[hash].prepend({ [key]: value });
            return this.storage[hash].head.value[key];
        }
    }

    get(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            let values = this.storage[hash].getValue(key);
            return values;
        } else {
            return null;
        }
    }
    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            return true;
        } else {
            return false;
        }
    }

}

module.exports={
    Node,
    LinkedList,
    HashTable
}