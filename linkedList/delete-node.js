/*
 * delete-node.js
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

  deleteNode(node, n) {
    if (node === n) {
      if (!node.next) {
        console.log('There is only one node. The list can\'t be made empty');

        return;
      }

      node.data = node.next.data;
      n = node.next;
      node.next = node.next.next;

      return;
    }

    let prev = node;
    while(prev.next && prev.next !== n) {
      prev = prev.next;
    }


    if (!prev.next) {
      console.log('Given node is not present in Linked List');

      return;
    }

    prev.next = prev.next.next;

    return;
  }

  printList(head) {
    while(head !== null) {
      console.log(`${head.data}\n`);
      head = head.next;
    }
  }
}

let llist = new LinkedList();
llist.head = LinkedList.Node(12);
llist.head.next = LinkedList.Node(15);
llist.head.next.next = LinkedList.Node(10);
llist.head.next.next.next = LinkedList.Node(11);
llist.head.next.next.next.next = LinkedList.Node(5);
llist.head.next.next.next.next.next = LinkedList.Node(6);
llist.head.next.next.next.next.next.next = LinkedList.Node(2);
llist.head.next.next.next.next.next.next.next = LinkedList.Node(3);

console.log('Given Linked List: ');
llist.printList(llist.head);

console.log(`Deleting node: ${llist.head.next.next.data}`);
llist.deleteNode(llist.head, llist.head.next.next);


console.log('Modified Linked List: ');
llist.printList(llist.head);

console.log('Deleting first Node');
llist.deleteNode(llist.head, llist.head);

console.log('Modified Linked List: ');
llist.printList(llist.head);
