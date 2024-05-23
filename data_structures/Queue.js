class Queue {
  constructor () {
    this.queue = [];
  }

  //insert element at the start of queue
  enqueue(element) {
    this.queue.push(element)
  }

  // removes and returns element at the front of queue if not empty
  dequeue() {
    if(this.queue.length === 0)
      return "the queue is empty";

    return this.queue.shift();
  }

  // returns element at the front of queue if not empty
  peek() {
    if(this.queue.length === 0)
      return "the stack is empty";
    
    return this.queue[this.queue.length-1];
  }

  //returns queue length
  getLength() {
    return this.queue.length;
  }
}

class PriorityQueue extends Queue {

  //insert a object with value and priority a the end of queue
  enqueue(value, priority) {
    this.queue.push({value, priority});
    this.sort();
  }

  //sorts queue based on lower priority to greater priority
  sort() {
    this.queue.sort((a,b) => a.priority - b.priority);
  }

}

module.exports = {Queue, PriorityQueue};