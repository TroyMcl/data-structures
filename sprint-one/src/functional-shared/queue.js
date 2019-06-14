var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.count = 0;
  stack.key = 0;
  stack.que = 0;
  _.extend(stack, queueMethods);
  return stack;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.key] = value;
    this.key++;
  },
  dequeue() {
    var current = this.storage[this.que];
    delete this.storage[this.que];
    this.que++;
    return current;
  },
  size (){
    return Object.keys(this.storage).length;
  }
};


