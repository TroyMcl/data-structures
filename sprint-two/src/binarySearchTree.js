// BinarySearchTree = {value : 2,
//           left : {value:left:null,right:null},
//           right: null;}


var BinarySearchTree = function(value) {
  var newObject = Object.create(BinarySearchTree.methods);
  newObject.left = null;
  newObject.right = null;
  newObject.value = value;
  return newObject;
};

BinarySearchTree.methods = {
  insert : function(value) {
    var newNode = BinarySearchTree(value);
    var traverseTree = function(node, value) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          traverseTree(node.left, value);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          traverseTree(node.right, value);
        }
      }
    };
    traverseTree(this, newNode.value);
  },
  contains : function(value) {
    var hasNode = false;
    var traverseNode = function(value, node) {
      if (!node) {
        return false;
      }
      if (node.value === value) {
        hasNode = true;
      } else if (node.value < value) {
        traverseNode(value, node.right);
      } else if (node.value > value) {
        traverseNode(value, node.left);
      }
    };
    traverseNode(value, this);
    return hasNode;
  },
  depthFirstLog : function(fn) {
    var getAllNodeValue = function(node){
      fn(node.value);
      if (node.left !== null) {
        getAllNodeValue(node.left);
      }
      if  (node.right !== null) {
        getAllNodeValue(node.right);
      }
    };
    getAllNodeValue(this);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert & contains are logarithmic O(log n)
 depthFirstLog linear O(n)
 */
