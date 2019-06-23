//{key: value};
//{key: Value}

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var arr = this._storage;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  var arr = this._storage;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i,1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  adding is O(1) constant
  contains and deleting are O(n) linear
 */
