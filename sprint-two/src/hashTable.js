//pseudoclassical instantiation


var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
//check if bucket exists at index
  //if not create a bucket
//look to see if key exists in bucket
  //if yes replace the value
  //if no then add key value pair
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var boo = false
  if (!Array.isArray(this._storage[index])) {
    this._storage[index] = [];
  }
  var curr = this._storage[index];
  //for (var array of this._storage[index]) for array of arrays
  for (var i = 0; i < curr.length; i++) {
    if (curr[i][0] === k) {
      curr[i][1] = v;
      boo = true;
    }
  }
  if(boo === false) {
    curr.push([k,v])
  }
};
//access selected bucket
  //loop through keys looking for a matching key
    //if find a match return value
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var current = this._storage[index];
  for (var i = 0; i < current.length; i++) {
    if (current[i][0] === k) {
      return current[i][1]
    }
  }
};
//access selected bucket
  //loop through keys looking for a match
  //delete key & value Remove entire array????
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var curr = this._storage[index];
  for (var i =0; i < curr.length; i++) {
    if(curr[i][0] === k) {
      curr[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert, ertrieve and remove are all constant time O(1)
 */


