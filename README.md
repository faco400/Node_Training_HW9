# Node_Training_HW9
Repository focusing on Studying node with the focus on javascript data structures (stack, queue, tree, graph, linked list)

1. [Task](#task)
2. [Documentation](#documentation)
  - [Stack](#stack-class-to-represent-a-stack-data-structure)


### Task

Demonstrate your knowledge of data structures (stack, queue, tree, graph, linked list) and implement algorithms to solve specific problems related to these data structures in JavaScript.

### **Part 1: Data Structure Implementations**

1. **Stack**: Implement a class for a stack data structure. Include methods for push, pop, and peek.
2. **Queue**: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.
<!-- 3. **Binary Tree**: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).
4. **Graph**: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).
5. **Linked List**: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node. -->

# Documentation

## Stack: Class to represent a stack data structure
- **Properties:**
  - **stack:** an array to hold the elements of the stack.
    - **type:** array.
  - **top:** Top element of stack
    - **type:** number.

- **Methods:**
  - **push(element):** Adds an element to the top of the stack.

  - **pop():** Removes and returns the top element from the stack. Returns 'Stack is empty' if the stack is empty.

  - **peek():** Returns the top element from the stack without removing it. Returns 'Stack is empty' if the stack is empty.


## Queue: Class to represent a queue data structure
- **Properties:**
  - **queue:** an array to hold the elements of the queue.
    - **type:** array.

- **Methods:**
  - **enqueue(element):** Inserts an element at the start of the queue.

  - **dequeue():** Removes and returns the element at the front of the queue. Returns 'the queue is empty' if the queue is empty.
  
  - **peek():** Returns the element at the front of the queue without removing it. Returns 'the queue is empty' if the queue is empty.