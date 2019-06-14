var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.count = 0;
  return instance;
};

var stackMethods = {
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop() {
    this.count--;
    return this.storage[this.count];
  },
  size() {
    if(this.count < 0) {
      return 0;
    }
    return this.count;
  }
};


