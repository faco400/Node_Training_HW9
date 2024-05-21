//importing classes
const Stack = require('./data_structures/Stack.js');
const Queue = require('./data_structures/Queue.js');

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

const queueTest = new Queue();

console.log(queueTest.peek()); // return its empty
queueTest.enqueue(1);
queueTest.enqueue(234);
queueTest.enqueue(5);
// console.log(queueTest); // object with queue
console.log(queueTest.peek()); //returns 1
console.log(queueTest.dequeue()); // returns 1
console.log(queueTest.dequeue()); // returns 234
console.log(queueTest.peek()); //returns 5

//-------------------------------------------------
