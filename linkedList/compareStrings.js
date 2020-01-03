/*
 * compareStrings.js
 * Copyright (C) 2018 Sushil Chhetri <chhetrisushil@gmail.com>
 */
'use strict';

class LinkedList {
  constructor() {
    this.head = null;
    this.a = null;
    this.b = null;
  }

  static Node(data) {
    return new (class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
      }
    })(data);//jshint ignore: line
  }

  compare(node1, node2) {
    if (!node1 && !node2) {
      return 1;
    }

    while (node1 && node2 && node1.data === node2.data) {
      node1 = node1.next;
      node2 = node2.next;
    }

    if (node1 && node2) {
      return (node1.data > node2.data ? 1 : -1);
    }

    if (!node1 && node2) {
      return -1;
    }

    return 0;
  }
}

let llist = new LinkedList();
llist.a = LinkedList.Node('g');
llist.a.next = LinkedList.Node('e');
llist.a.next.next = LinkedList.Node('e');
llist.a.next.next.next = LinkedList.Node('k');
llist.a.next.next.next.next = LinkedList.Node('s');
llist.a.next.next.next.next.next = LinkedList.Node('b');


llist.b = LinkedList.Node('g');
llist.b.next = LinkedList.Node('e');
llist.b.next.next = LinkedList.Node('e');
llist.b.next.next.next = LinkedList.Node('k');
llist.b.next.next.next.next = LinkedList.Node('s');
llist.b.next.next.next.next.next = LinkedList.Node('a');

let value = llist.compare(llist.a, llist.b);
console.log(value);
