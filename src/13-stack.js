/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Stack {
  push(element) {
    const node = {
      value: element,
      next: null,
    };

    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }

  pop() {
    const current = this.top;
    this.top = this.top.next;
    return current.value;
  }

  peek() {
    return this.top.value;
  }
}

module.exports = Stack;
