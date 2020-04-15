"use strict";

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // First node of the linked list
        this.size = 0;
    }

    insertAtHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    insertAtTail(data) {
        const node = new Node(data);
        let tail = null;
        // If empty, make it the head.
        if (!this.head) {
            this.head = node;
        } else {
            tail = this.head;

            while (tail.next) {
                tail = tail.next;
            }

            tail.next = node;
        }

        this.size++;
    }
}

const linkedList = new LinkedList();

linkedList.insertAtHead(100);
linkedList.insertAtTail(500);

console.log(linkedList);
