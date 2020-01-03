/*
 * doublyLinkedListLru.js
 * Copyright (C) 2018 Sushil Chhetri <chhetrisushil@gmail.com>
 */
let currSize = new WeakMap();
let size = new WeakMap();
let tail = new WeakMap();

class DoublyLinkedList {
  constructor(_size = 0) {
    this.head = null;
    tail.set(this, null);
    currSize.set(this, 0);
    size.set(this, _size);
  }

  static Node(data) {
    return new (class Node {
      constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
      }
    })(data);//jshint ignore: line
  }

  get tail() {
    return tail.get(this);
  }

  get currSize() {
    return currSize.get(this);
  }

  get size() {
    return size.get(this);
  }

  addPageToList(pageNumber) {
    let pageNode = DoublyLinkedList.Node(pageNumber);

    if (!this.head) {
      this.head = pageNode;
      tail.set(this, pageNode);
      currSize.set(this, 1);

      return pageNode;
    } else if (this.currSize < this.size){
      currSize.set(this, this.currSize + 1);
    } else {
      tail.set(this, this.tail.prev);
      this.tail.next = null;
    }

    pageNode.next = this.head;
    this.head.prev = pageNode;
    this.head = pageNode;

    return pageNode;
  }

  movePageToHead(pageNode) {
    if (!pageNode || pageNode === this.head) {
      return;
    }

    if (pageNode === this.tail) {
      tail.set(this, this.tail.prev);
      this.tail.next = null;
    }

    let prev = pageNode.prev;
    let next = pageNode.next;
    prev.next = next;

    if (next) {
      next.prev = prev;
    }

    pageNode.prev = null;
    pageNode.next = this.head;
    this.head.prev = pageNode;
    this.head = pageNode;
  }

  printList() {
    if (!this.head) {
      return;
    }

    let temp = this.head;

    while(temp) {
      console.log(temp.data);

      temp = temp.next;
    }
  }
}

let pageList = new WeakMap();
let pageMap = new WeakMap();
let cacheSize = new WeakMap();

class LRUCache {
  constructor(_cacheSize = 0) {
    cacheSize.set(this, _cacheSize);
    pageList.set(this, new DoublyLinkedList(_cacheSize));
    pageMap.set(this, new Map());
  }

  accessPage (pageNumber) {
    let pageNode = null;

    if (pageMap.get(this).has(pageNumber)) {
      pageNode = pageMap.get(this).get(pageNumber);
      pageList.get(this).movePageToHead(pageNode);
    } else {
      if (pageList.get(this).currSize === pageList.get(this).size) {
        pageMap.get(this).delete(pageList.get(this).tail.data);
      }

      pageNode = pageList.get(this).addPageToList(pageNumber);
      pageMap.get(this).set(pageNumber, pageNode);
    }
  }

  printCacheState() {
    pageList.get(this).printList();
    console.log('\n');
  }
}

let lruc = new LRUCache(4);
lruc.accessPage(4);
lruc.printCacheState();
lruc.accessPage(2);
lruc.printCacheState();
lruc.accessPage(1);
lruc.printCacheState();
lruc.accessPage(1);
lruc.printCacheState();
lruc.accessPage(4);
lruc.printCacheState();
lruc.accessPage(3);
lruc.printCacheState();
lruc.accessPage(7);
lruc.printCacheState();
lruc.accessPage(8);
lruc.printCacheState();
lruc.accessPage(3);
lruc.printCacheState();
