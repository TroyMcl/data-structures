var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);  // fix me


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
    var treeNode = Tree(value);
    this.children.push(treeNode);

};

treeMethods.contains = function(target) {
  var node = this;
  var result = false;
  function check(node) {
    if(node.value === target) {
      result = true;
    }
    if(Array.isArray(node.children)) {
      var child = node.children
      for (var i = 0; i < child.length; i++) {
        check(child[i]);
      }
    }
  }
  check(node);
  return result;

};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild is O(1);
 contains is O(n2);
 */
