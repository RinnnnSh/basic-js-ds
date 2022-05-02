const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 class ListNode {
   constructor(value) {
     this.value = value;
     this.next = null;
   }
 };

class Queue {
  constructor() {
    this.first = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    if (this.size === 0) {
      this.first = new ListNode(value);
    } else {
      let current = this.first;

      while (current.next) {
        current = current.next;
      };
      current.next = new ListNode(value);
    }
    this.size++
  }

  dequeue() {
    let topElement = this.first;
    this.first = topElement.next
    if (this.size === 0) {
      return null;
    }
    this.size--;
    return topElement.value;
  }
}

module.exports = {
  Queue
};
