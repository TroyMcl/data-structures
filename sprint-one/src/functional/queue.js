var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var que = 0;
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function() {
    var current = storage[que];
    delete storage[que];
    que++;
    return current;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
