var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var current = Node(value);

    if (this.head === null) {
      this.head = current;
    }
    if (this.tail === null) {
      this.tail = current;
    } else {
      this.tail.next = current;
      this.tail = current;
    }
  };

  list.removeHead = function() {
    var deletedValue = this.head.value;
    this.head = this.head.next;
    return deletedValue;
  };

  list.contains = function(target) {
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 removehead and addtotail are O(1) linear time complexity
 worst case is for contains O(n) linear time complexity
 */
