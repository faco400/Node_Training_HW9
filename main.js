//importing classes
const Stack = require('./data_structures/Stack.js')

//-----------------Testing stack ------------------
const stackTest = new Stack();

console.log(stackTest.peek()); // return its empty
stackTest.push(1); 
console.log(stackTest.peek()); //returns 1
stackTest.push(234);
console.log(stackTest.peek()); // returns 234
stackTest.push(5); 
console.log(stackTest.peek()); // returns 5
console.log(stackTest.pop()); // returns 5
console.log(stackTest.peek()); //returns 234 

//-------------------------------------------------