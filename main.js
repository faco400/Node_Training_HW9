//importing classes
const Stack = require('./data_structures/Stack.js');
const Queue = require('./data_structures/Queue.js');
const BinaryTree = require('./data_structures/BTree.js');

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
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

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