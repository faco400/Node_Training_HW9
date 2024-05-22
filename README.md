# Node_Training_HW9
Repository focusing on Studying node with the focus on javascript data structures (stack, queue, tree, graph, linked list)

1. [Task](#task)
2. [Documentation](#documentation)
  - [Stack](#stack-class-to-represent-a-stack-data-structure)
  - [Queue](#queue-class-to-represent-a-queue-data-structure)
  - [Binary Tree](#binarytree-class-to-represent-a-binary-tree-data-structure)


### Task

Demonstrate your knowledge of data structures (stack, queue, tree, graph, linked list) and implement algorithms to solve specific problems related to these data structures in JavaScript.

### **Part 1: Data Structure Implementations**

1. **Stack**: Implement a class for a stack data structure. Include methods for push, pop, and peek.
2. **Queue**: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.
3. **Binary Tree**: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).
4. **Graph**: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).
<!-- 5. **Linked List**: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node. -->

# Documentation

## [Stack](./data_structures/Stack.js): Class to represent a stack data structure
- **Properties:**
  - **stack:** an array to hold the elements of the stack.
    - **type:** array.
  - **top:** Top element of stack
    - **type:** number.

- **Methods:**
  - **push(element):** Adds an element to the top of the stack.

  - **pop():** Removes and returns the top element from the stack. Returns 'Stack is empty' if the stack is empty.

  - **peek():** Returns the top element from the stack without removing it. Returns 'Stack is empty' if the stack is empty.


## [Queue](./data_structures/Queue.js): Class to represent a queue data structure
- **Properties:**
  - **queue:** an array to hold the elements of the queue.
    - **type:** array.

- **Methods:**
  - **enqueue(element):** Inserts an element at the start of the queue.

  - **dequeue():** Removes and returns the element at the front of the queue. Returns 'the queue is empty' if the queue is empty.

  - **peek():** Returns the element at the front of the queue without removing it. Returns 'the queue is empty' if the queue is empty.

  - **getLength:** Returns value of queue length.

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