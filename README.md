# Node_Training_HW9
Repository focusing on Studying node with the focus on javascript data structures (stack, queue, tree, graph, linked list)

1. [Task](#task)
2. [Documentation](#documentation)
  - [Stack](#stack-class-to-represent-a-stack-data-structure)
    - [Min/Max Stack](#minmax-stack-class-extended-from-stack-to-support-getting-minimum-and-maximum-elements-in-constant-time-o1)
  - [Queue](#queue-class-to-represent-a-queue-data-structure)
   - [Priority Queue](#priority-queue-class-extended-from-queue-data-structure)
  - [Binary Tree](#binarytree-class-to-represent-a-binary-tree-data-structure)
  - [Graph](#graph-class-to-represent-a-graph-data-structure)
    - [Weighted Graph](#weighted-graph-class-that-extends-from-graph)
  - [Linked List](#linked-list-class-to-represent-singly-linked-list-data-structure)


### Task

Demonstrate your knowledge of data structures (stack, queue, tree, graph, linked list) and implement algorithms to solve specific problems related to these data structures in JavaScript.

### **Part 1: Data Structure Implementations**

1. **Stack**: Implement a class for a stack data structure. Include methods for push, pop, and peek.
2. **Queue**: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.
3. **Binary Tree**: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).
4. **Graph**: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).
5. **Linked List**: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node.

### **Part 2: Algorithmic Problems**

1. **Min/Max Stack**: Implement a class for a stack that supports finding the minimum and maximum elements in constant time (O(1)). Include methods for push, pop, getMin, and getMax.

2. **Binary Search Tree**: Implement a function to determine if a binary tree is a binary search tree (BST). Provide an efficient algorithm that checks whether the tree satisfies the BST property.

3. **Graph Algorithms**: Implement algorithms to find the shortest path between two vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).

4. **Linked List Cycle**: Implement a function to detect if a linked list has a cycle. Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.

# Documentation

## [Stack](./data_structures/Stack.js): Class to represent a stack data structure
- **Properties:**
  - **stack:** an array to hold the elements of the stack.
    - **type:** array.

- **Methods:**
  - **push(element):** Adds an element to the top of the stack.

  - **pop():** Removes and returns the top element from the stack. Returns 'Stack is empty' if the stack is empty.

  - **peek():** Returns the top element from the stack without removing it. Returns 'Stack is empty' if the stack is empty.

  - **getLength:** Returns value of stack length.

## [Min/Max Stack](./data_structures/Stack.js): Class extended from Stack to support getting minimum and maximum elements in constant time (O(1)).

- **Observations:**
This class has two extra properties that are now being considering when performing the push and pop operations:
  - **minStack**: array that stores min value of stack for each iteration
    - **type:** array.
  - **maxStack**: array that stores max value of stack for each iteration
    - **type:** array.
And two more methods: 
  - **getMin()**: returns the min value of stack by getting the top element of minStack.
  - **getMax()**: returns the max value of satack by getting the top element of maxStack.

**It guarantees constant time (O(1)) of getting min and max by implementing two more additional stacks: maxStack and minStack, each is responsible to stack the max and min values every push operation. This way, every time we pop a element out of the stack, we make sure the max and min values change accordingly. And every time we need to get either value we just need to extract the top element of each of these stacks.** 


## [Queue](./data_structures/Queue.js): Class to represent a queue data structure
- **Properties:**
  - **queue:** an array to hold the elements of the queue.
    - **type:** array.

- **Methods:**
  - **enqueue(element):** Inserts an element at the start of the queue.

  - **dequeue():** Removes and returns the element at the front of the queue. Returns 'the queue is empty' if the queue is empty.

  - **peek():** Returns the element at the front of the queue without removing it. Returns 'the queue is empty' if the queue is empty.

  - **getLength:** Returns value of queue length.

## [Priority Queue](./data_structures/Queue.js): Class extended from queue data structure
- **Observations:**
This class was made to facilitate the implementation of a weighted graph. A priority queue considers not only the value of each element but its corresponding priority. With that, the enqueue operation now has two parameters (value and priority). And it now has one more method:
- **sort()**: used to sort priorities of queue, the first position should have the lower priority, and the last position, the highest.

## [BinaryTree](./data_structures/BTree.js): Class to represent a binary tree data structure
- **Properties:**
  - **root:** The root node of the binary tree.
    - **type:** Node or null.
- **Methods:**

  - **getRoot()**: Returns the root node of the binary tree.

  - **insert(value)**: Creates a new node with the given value and inserts it into the binary tree.
  insertNode(node, newNode): Recursively attempts to insert a new node into the tree starting from the given node.

  - **remove(value)**: Removes a node with the specified value from the binary tree.
  removeNode(node, toBeDeleted): Recursively removes a node with the specified value starting from the given node.

  - **findMinNode(node)**: Finds the node with the minimum value in the subtree starting from the given node.

  - **inOrder(node)**: Performs an in-order traversal of the binary tree starting from the given node, printing the values of the nodes.

  - **preOrder(node)**: Performs a pre-order traversal of the binary tree starting from the given node, printing the values of the nodes.

  - **postOrder(node)**: Performs a post-order traversal of the binary tree starting from the given node, printing the values of the nodes.

  - **search(node, value)**: Searches for a node with the specified value starting from the given node.

**Observations**:
  - **isBinarySearchTree(node, min = null, max = null)**: Verifies if tree is a BST tree recursively searching subtrees to the left and right of root. If node values are less to than each other as it traverses more to the left, and greater the more it goes to the right then it respects the BST property, thus being a BST.

## [Graph](./data_structures/Graph.js): Class to represent a graph data structure

- **Properties:**
  - **adjacencyList:** list of adjacency elements on graph
    - **type:** Object.

- **Methods:**
  - **addVertex(vertex)**: Performs the addition of vertex in list of adjacency.

  - **addEdge(v1,v2)**: Performs the addition of edges in list of adjacency.

  - **BFS(start)**: Performs the Breadth-First Search traversal in the graph using a start vertex.

  - **DFS(start)**: Performs the Depth-First Search traversal in the graph using a start vertex.

## [Weighted Graph](./data_structures/Graph.js): Class that extends from Graph
**Observations**:
Since now this type of graph takes into consideration the weight of edges, we now have weight parameter when adding edges. And now its possible to find shortest path between nodes and implement Dijkstra algorith:

- **Dikstra(start, end)**: Named after its creator, Edsger W. Dijkstra, this algorithm operates on a weighted graph (a network of nodes connected by edges with weights, where weights typically represent distances, costs, etc.). It determines the shortest path from a starting node to all other nodes in the graph.

- **ShortestPathBFS(start, end)**: Modified version of BFS that searches shortest path between two nodes using the BFS search to traverse the graph. It now has not only the start node but the end node representing the final destination.


## [Linked List](./data_structures/linkedList.js): Class to represent singly Linked list data structure

- **Properties:**
  - **head:** head of linked list, points to first element of list
    - **type:** Node or null.

- **Methods:**
  - **insert(value)**: receives a value, creates a node with that value and insert it into the linked list. Returns true if 

  - **delete(value)**: Deletes a node with specified value from linked list

  - **search(value)**: search for a node with specified value in linked list. If it finds then returns node, otherwise return false. It also returns false if empty list

  - **printList()**: Prints in console the order of linked list
  