var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.que = 0;
  this.key = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.key] = value;
  this.key++;
};

Queue.prototype.dequeue = function() {
  var curr = this.storage[this.que];
  delete this.storage[this.que];
  this.que++;
  return curr;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};


