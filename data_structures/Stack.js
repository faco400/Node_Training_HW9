class Stack {
  constructor () {
    this.stack = [];
  }

  //pushes element into stack and increment top variable 
  push(element) {
    this.stack.push(element);
  }

  //removes top element of stack if stack not empty
  pop() {
    if(this.getLength() === 0)
      return "the stack is empty";

    return this.stack.pop();
  }

  //returns top element of stack
  peek() {
    if(this.getLength() === 0)
      return "the stack is empty";
    
    return this.stack[this.stack.length - 1];
  }

  //returns stack length
  getLength() {
    return this.stack.length;
  }

}

module.exports = Stack;