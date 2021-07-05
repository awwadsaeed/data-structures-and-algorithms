'use strict';
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.counter = 0;

    }

    insert(value) {
        try {
            this.counter = this.counter + 1;
            if (value == undefined) {
                throw new Error(`cannot insert ${value} into the list`);
            }
            let addNode = new Node(value);
            if (!this.head) {
                this.head = addNode;
            } else {
                addNode.next = this.head;
                this.head = addNode;
            }
        } catch (e) {
            console.error(e);
        }
    }
    includes(value) {
        try {
            if (value == undefined) {
                throw new Error(`cannot check ${value}`);
            }
            let current = this.head;
            if (!this.head) {
                return false;
            }
            while (current.next) {

                if (current.value == value) {
                    return true;
                }

                current = current.next;

                if ((current.next == null) && (value == current.value)) {
                    return true;
                }
            }
            return false;
        } catch (e) {
            console.error(e);
        }
    }
    toString() {
        let outPut = '';
        let current = this.head;
        while (current.next) {
            if (current.value == null) {
                outPut = outPut + `NULL -> `;
            } else {
                outPut = outPut + `{${current.value}} -> `;
            }
            current = current.next;
            if (current.next == null) {
                outPut = outPut + `{${current.value}}`;
            }
        }
        return outPut;


    }
    append(value) {
        this.counter = this.counter + 1;
        let node1 = new Node(value);
        if (!this.head) {
            this.head = node1;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node1;
        }
    }
    insertAfter(newValue, value) {
        this.counter = this.counter + 1;
        let node1 = new Node(newValue);
        let current = this.head;

        while (current) {
            if (current.value == value) {
                node1.next = current.next;
                current.next = node1;
                break;
            }
            current = current.next;

        }
    }
    insertBefore(newValue, value) {
        this.counter = this.counter + 1;
        let node1 = new Node(newValue);
        let current = this.head;
        if (value == this.head.value) {
            node1.next = this.head;
            this.head = node1;
        } else {
            while (current) {
                if (current.next.value == value) {
                    node1.next = current.next;
                    current.next = node1;
                    break;
                }
                current = current.next;

            }
        }
    }
    kthFromEnd(k) {
        let current = this.head;
        let cnt = 1;
        if (k >= this.counter || k < 0) {
            return 'Exception';
        }
        while (current) {
            if (cnt == this.counter - k) {
                return current.value;
            }
            cnt = cnt + 1;
            current = current.next;
        }
    }


}

module.exports = LinkedList;
