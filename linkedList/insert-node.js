/*
 * insert-node.js
 * Copyright (C) 2018 Sushil Chhetri <chhetrisushil@gmail.com>
 */
'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  static Node(data) {
    return new (class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    })(data);//jshint ignore: line
  }

  newNode(data) {
    let node = LinkedList.Node(data);

    return node;
  }

  sortedInsert(node) {
    let current;

    if (!this.head || this.head.data >= node.data) {
      node.next = this.head;

      this.head = node;
    } else {
      current = this.head;

      while (current.next && current.next.data < node.data) {
        current = current.next;
      }

      node.next = current.next;
      current.next = node;
    }
  }

  printList() {
    let temp = this.head;

    while (temp) {
      console.log(`${temp.data}\n`);
      temp = temp.next;
    }
  }
}

let llist = new LinkedList();

let node = llist.newNode(5);
llist.sortedInsert(node);
node = llist.newNode(10);
llist.sortedInsert(node);
node = llist.newNode(7);
llist.sortedInsert(node);
node = llist.newNode(3);
llist.sortedInsert(node);
node = llist.newNode(1);
llist.sortedInsert(node);
node = llist.newNode(9);
llist.sortedInsert(node);
node = llist.newNode(2);
llist.sortedInsert(node);

llist.printList();
