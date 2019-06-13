var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //var count = 0;
  var que = 0
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    //count++;
    key++;
  };

  someInstance.dequeue = function() {
    var current = storage[que];
    delete storage[que];
    //count--;
    que++;
    return current;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
    // if (count < 0) {
    //   return 0;
    // }
    // return count;
  };

  return someInstance;
};
