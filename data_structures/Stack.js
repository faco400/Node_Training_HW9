class Stack {
  constructor () {
    this.stack = [];
    this.top = -1;
  }

  //pushes element into stack and increment top variable 
  push(element) {
    this.stack.push(element);
    this.top++;
  }

  //removes top element of stack if stack not empty
  pop() {
    if(this.top === -1)
      return "the stack is empty";

    this.top--;
    return this.stack.pop();
  }

  //returns top element of stack
  peek() {
    if(this.top === -1)
      return "the stack is empty";
    
    return this.stack[this.top];
  }

}

module.exports = Stack;