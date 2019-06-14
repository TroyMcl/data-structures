class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.key = 0;
    this.que = 0;
  }
  enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  }
  dequeue() {
    var curr = this.storage[this.que];
    delete this.storage[this.que];
    this.que++;
    return curr;
  }
  size() {
    return Object.keys(this.storage).length;
  }

}
