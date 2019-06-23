// this.nodes = { '1' : { edges : {'2' : true,
//                                 '3',true },
//                '2' : { edges : {'1' : true}}}}
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = { edges: {} };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (let key in this.nodes) {
    if (this.nodes[key].edges[node]) {
      delete this.nodes[key].edges[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.nodes[fromNode].edges[toNode] === true) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = true;
  this.nodes[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var keys = Object.keys(this.nodes);
  for (let key of keys) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  for addNode,contains, constant, hasEdge, addEdge, removeEdge O(1);
  for removeNode, forEachNode linear O(n)
*/
