//importing classes
const {Stack, MinMaxStack} = require('./data_structures/Stack.js');
const Queue = require('./data_structures/Queue.js');
const BinaryTree = require('./data_structures/BTree.js');
const {Graph, WeightedGraph} = require('./data_structures/Graph.js');
const LinkedList = require('./data_structures/linkedList.js')

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

//-----------------MinMax stack test ------------------

// const stackTest = new MinMaxStack();

// console.log(stackTest.peek()); // return its empty
// stackTest.push(1); 
// stackTest.push(234);
// stackTest.push(5); 
// console.log(stackTest.getMin()); //return 1
// console.log(stackTest.getMax()); // returns 234

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


// // create an object for the BinaryTree
// var Btree = new BinaryTree();
 
// // Inserting nodes to the BinaryTree
// Btree.insert(15);
// Btree.insert(25);
// Btree.insert(10);
// Btree.insert(7);
// Btree.insert(22);
// Btree.insert(17);
// Btree.insert(13);
// Btree.insert(5);
// Btree.insert(9);
// Btree.insert(27);

//   //        15
//   //       /  \
//   //      10   25
//   //     / \   / \
//   //    7  13 22  27
//   //   / \    /
//   //  5   9  17 

// //verifies orders
// Btree.inOrder(Btree.getRoot());
// // Btree.preOrder(Btree.getRoot());
// // Btree.postOrder(Btree.getRoot());

// // verifies if binary search tree
// console.log(Btree.isBinarySearchTree(Btree.getRoot())); 

//-------------------------------------------------
//-----------------Testing Graph ------------------

// const graph = new Graph();

// //initialize adjacency list with vertices
// graph.addVertex(15);
// graph.addVertex(25);
// graph.addVertex(10);
// graph.addVertex(7);
// graph.addVertex(22);
// graph.addVertex(17);
// graph.addVertex(13);
// graph.addVertex(5);
// graph.addVertex(9);
// graph.addVertex(27);

// //creating edges
// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //     / \    /
// //    5   9  17

// graph.addEdge(15,25);
// graph.addEdge(15,10);
// graph.addEdge(10,7);
// graph.addEdge(10,13);
// graph.addEdge(7,5);
// graph.addEdge(7,9);
// graph.addEdge(25,22);
// graph.addEdge(25,27);
// graph.addEdge(22,17);

// console.log('BFS RESULT:');
// console.log(graph.BFS(15));

// console.log('DFS RESULT:');
// console.log(graph.DFS(15));

//-------------------------------------------------------
//-----------------Testing BFS shortest Path ------------------

// const graph = new WeightedGraph();

// // graph
// // A
// // | \
// // 4   2
// // |     \
// // B      C
// // |     2 \
// // 3    /   4
// // |   D--1---F
// // |  /     / 
// // | 3     /   
// // |/     /     
// // E-----1       

// // adding vertices
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');
// graph.addVertex('F');

// // adding edges
// graph.addEdge('A', 'B', 4);
// graph.addEdge('A', 'C', 2);
// graph.addEdge('B', 'E', 3);
// graph.addEdge('C', 'D', 2);
// graph.addEdge('C', 'F', 4);
// graph.addEdge('D', 'E', 3);
// graph.addEdge('D', 'F', 1);
// graph.addEdge('E', 'F', 1);

// console.log('Shortest Path with BFS: ' + graph.ShortestPathBFS('A','F'));
// console.log('Shortest Path with dijkstra: ' + graph.Dijkstra('A', 'F'));

// -------------------------------------------------------
//-----------------Testing linked List ------------------

// const list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// list.insert(5);

// list.printList();
// list.delete(4);
// list.printList();
// list.delete(1);
// list.printList();
// list.delete(5);
// list.printList();

// console.log(list.search(3));

//-------------------------------------------------
//-----------------Testing Cycle detection ------------------


// const list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// list.insert(5);

// list.printList();
// console.log('Does it have a cycle? '+ list.hasCycle());
// list.createCycle();
// console.log('Cycle created!');
// console.log('Does it have a cycle? '+ list.hasCycle());

//-------------------------------------------------







