const Node = require('./aux-classes/Node.js');
const LinkedList = require('./linkedList.js');
const {Queue, PriorityQueue} = require('./Queue.js');
const {Stack} = require('./Stack.js');

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

}

class WeightedGraph extends Graph {
  //adding weighted edge between vertices v1 and v2
  addEdge(v1,v2, weight = 1) {
    this.adjacencyList[v1].push({node: v2, weight});
    this.adjacencyList[v2].push({node: v1, weight});
  }

  //shortest path using dijkistra algorithm
  Dijkstra (start, end) {
    const distances = {} //list of distances between nodes
    const queue = new PriorityQueue(); //creating priority queue
    const previous = {}; //list of visited?
    let path = [] //array containging shortest path
    let smallest //to store the smallest distance in queue

    //initializing adjacency list
    for (let vertex in this.adjacencyList) {
      if(vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        queue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    //while there is something to visit
    while(queue.getLength() > 0) {
      smallest = queue.dequeue().value
      if(smallest === end) {
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if(smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]){
          //fing neighbor node
         let nextNode = this.adjacencyList[smallest][neighbor];
         //calculate distance to neighbor node
         let candidate = distances[smallest] + nextNode.weight;
         let nextNeighbor = nextNode.node;
         if(candidate < distances[nextNeighbor]){
          //updating smallest distance to neighbor
          distances[nextNeighbor] = candidate;
          //updating previous - How we got the neighbor
          previous[nextNeighbor] = smallest;
          //enqueue in priority queue with new priority
          queue.enqueue(nextNeighbor, candidate);
         }
        }
      }
    }

    return path.concat(smallest).reverse();
  }

  //find shortest Path using BFS
  ShortestPathBFS(start, end) {
    const queue = new Queue();
    queue.enqueue(start);
    const distances = {};
    const previous = { [start]: null};
    const visited = {[start]: true};
    let path = [];

    //while there is something to visit
    while(queue.getLength() > 0) {
      let currentVertex = queue.dequeue();

      //if at the end, build path back and reverse it to put into order
      if (currentVertex === end) {
        while(previous[currentVertex]) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }

        path.push(start);
        return path.reverse();
      }

      // for each neighbor or current vertex, mark it as visited, 
      //set current vertex as previous
      // and increment distance to neighbor node
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          previous[neighbor.node] = currentVertex;
          distances[neighbor.node] = ++distances[currentVertex];
          queue.enqueue(neighbor.node);
        }
      });
    }
    // returns null if not found path
    return null
  }
}

module.exports = {Graph, WeightedGraph};