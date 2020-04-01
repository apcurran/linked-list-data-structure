"use strict";

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addToHead(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    addToTail(value) {
        let node = new Node(value);
        let current;

        // If initially empty, make the head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    addAtIndex(value, index) {
        // Index is out of range
        if (index > 0 && index > this.size) {
            return false;
        }

        if (index === 0) {
            this.addToHead(value);
            return;
        }

        const node = new Node(value);
        let current;
        let previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    getAtIndex(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return current.value;
            }

            count++;
            current = current.next;
        }

        return null;
    }
    
    removeAtIndex(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index === 0) {
            // De-link
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    printListValues() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const myLinkedList = new LinkedList();

myLinkedList.addToHead(120);
myLinkedList.addToTail(350);

myLinkedList.printListValues();