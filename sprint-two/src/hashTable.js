var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var boo = false;
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }
  var curr = this._storage[index];
  for (var i = 0; i < curr.length; i++) {
    if (curr[i] && curr[i][0] === k) {
      curr[i][1] = v;
      boo = true;
    }
  }
  if (boo === false) {
    curr.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage[index];
  for (var i = 0; i < current.length; i++) {
    if (current[i] && current[i][0] === k) {
      return current[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curr = this._storage[index];
  for (var i = 0; i < curr.length; i++) {
    if (curr[i] && curr[i][0] === k) {
      delete curr[i];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert, retrieve and remove are all constant time O(1)
 */


