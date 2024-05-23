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

class MinMaxStack extends Stack {
  constructor(stack) {
    super(stack);
    this.minStack = []; // stack min value in each 'layer'
    this.maxStack = []; // stack max value in each 'layer'
  }

   //pushes element into stack and increment top variable 
   push(element) {
     if(this.getLength() === 0){
      this.minStack.push(element);
      this.maxStack.push(element);
     } else {

      if(element >= this.getMax()){
        this.maxStack.push(element);
      } else {
        this.maxStack.push(this.getMax());
      }

      if(element <= this.minValue){
        this.minStack.push(element);
      } else {
        this.minStack.push(this.getMin());
      }

     }
    this.stack.push(element);
  }

  pop() {
    if(this.getLength() === 0)
      return "the stack is empty";

    this.maxStack.pop();
    this.minStack.pop();
    return this.stack.pop();
  }

  getMin() {
    if(this.getLength() > 0) {
      return this.minStack[this.getLength() - 1];
    } else {
      "the stack is empty";
    }
  }

  getMax() {
    if(this.getLength() > 0) {
      return this.maxStack[this.getLength() - 1];
    } else {
      return "the stack is empty";
    }
  }
}

module.exports = {Stack, MinMaxStack};