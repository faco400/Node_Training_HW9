//importing classes
const Stack = require('./data_structures/Stack.js');
const Queue = require('./data_structures/Queue.js');
const BinaryTree = require('./data_structures/BTree.js');
const Graph = require('./data_structures/Graph.js');

//-----------------Testing stack ------------------
// const stackTest = new Stack();

// console.log(stackTest.peek()); // return its empty
// stackTest.push(1); 
// console.log(stackTest.peek()); //returns 1
// stackTest.push(234);
// console.log(stackTest.peek()); // returns 234
// stackTest.push(5); 
// console.log(stackTest.peek()); // returns 5
// console.log(stackTest.pop()); // returns 5
// console.log(stackTest.peek()); //returns 234 

//-------------------------------------------------
//-----------------Testing queue ------------------

// const queueTest = new Queue();

// console.log(queueTest.peek()); // return its empty
// queueTest.enqueue(1);
// queueTest.enqueue(234);
// queueTest.enqueue(5);
// // console.log(queueTest); // object with queue
// console.log(queueTest.peek()); //returns 1
// console.log(queueTest.dequeue()); // returns 1
// console.log(queueTest.dequeue()); // returns 234
// console.log(queueTest.peek()); //returns 5

//-------------------------------------------------
//-----------------Testing Btree ------------------


// create an object for the BinaryTree
var BST = new BinaryTree();
 
// Inserting nodes to the BinaryTree
// BST.insert(15);
// BST.insert(25);
// BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17 

// BST.inOrder(BST.getRoot());
// BST.preOrder(BST.getRoot());
// BST.postOrder(BST.getRoot());

//-------------------------------------------------
//-----------------Testing Graph ------------------

const graph = new Graph();

//initialize adjacency list with vertices
graph.addVertex(15);
graph.addVertex(25);
graph.addVertex(10);
graph.addVertex(7);
graph.addVertex(22);
graph.addVertex(17);
graph.addVertex(13);
graph.addVertex(5);
graph.addVertex(9);
graph.addVertex(27);

//creating edges
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

graph.addEdge(15,25);
graph.addEdge(15,10);
graph.addEdge(10,7);
graph.addEdge(10,13);
graph.addEdge(7,5);
graph.addEdge(7,9);
graph.addEdge(25,22);
graph.addEdge(25,27);
graph.addEdge(22,17);

console.log('BFS RESULT:');
console.log(graph.BFS(15));

console.log('DFS RESULT:');
console.log(graph.DFS(15));








