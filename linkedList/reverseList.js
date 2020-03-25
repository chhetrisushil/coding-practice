class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  getList() {
    let result = "";
    let temp = this;

    while (temp !== null) {
      result += temp.value;
      temp = temp.next;
    }

    return result;
  }
};

const reverseIterate = function (head) {
  let current = head,
      previous = null;

  while (current !== null) {
    let next = current.next;

    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

const reverseRecurse = function (head) {
  let current = head,
    previous = null;

  const reverse = node => {
    let next = node.next;

    current.next = previous;
    previous = current;
    current = next;

    if (next === null) {
      return node;
    }

    return reverse(current);
  };

  return reverse(current);
};

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.getList()}`);
console.log(`Nodes of reversed (iteration) LinkedList are: ${reverseIterate(head).getList()}`);

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.getList()}`);
console.log(`Nodes of reversed (iteration) LinkedList are: ${reverseRecurse(head).getList()}`);
