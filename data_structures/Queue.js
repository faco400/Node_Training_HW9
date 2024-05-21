class Queue {
  constructor () {
    this.queue = [];
  }

  //insert element at the start of queue
  enqueue(element) {
    this.queue.unshift(element)
  }

  // removes and returns element at the front of queue if not empty
  dequeue() {
    if(this.queue.length === 0)
      return "the queue is empty";

    return this.queue.pop();
  }

  // returns element at the front of queue if not empty
  peek() {
    if(this.queue.length === 0)
      return "the stack is empty";
    
    return this.queue[this.queue.length-1];
  }
}

module.exports = Queue;