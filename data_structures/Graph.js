const Node = require('./aux-classes/Node.js');
const Queue = require('./Queue.js');
const Stack = require('./Stack.js');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //adding vertex to adjacencyList
  addVertex(vertex) {
    if(!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  //addinc edge between vertices v1 and v2
  addEdge(v1,v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  //Breadth-First Search
  BFS(start) {
    const queue = new Queue();
    queue.enqueue(start);
    const visited = new Set();
    const result = [];

    while(queue.getLength() > 0) {
      const vertex = queue.dequeue();

      if(!visited.has(vertex)){
        visited.add(vertex);
        result.push(vertex);

        for(const neighbor of this.adjacencyList[vertex]) {
          queue.enqueue(neighbor);
        }
      }
    }

    return result;
  }

  //Depth-First Search
  DFS (start) {
    const stack = new Stack();
    stack.push(start);
    const visited = new Set();
    const result = [];

    while(stack.getLength() > 0) {
      const vertex = stack.pop();

      if(!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);

        for(const neighbor of this.adjacencyList[vertex]) {
          stack.push(neighbor);
        }
      }
    }

    return result;
  }



  // BFS(node) {
  //   if(!node) {
  //     return [];
  //   }

  //   const queue = new Queue();
  //   queue.enqueue(node);
  //   const result = [];

  //   while(queue.getLength() > 0) {
  //     const current = queue.dequeue();
  //     result.push(current.value);

  //     if(current.left) {
  //       queue.enqueue(current.left);
  //     }

  //     if(current.right) {
  //       queue.enqueue(current.right);
  //     }
  //   }

  //   return result;
  // }
}

module.exports = Graph;