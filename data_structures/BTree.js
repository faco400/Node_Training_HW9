class Node {
  constructor (value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor () {
    this.root = null;
  }

  //getter of root property
  getRoot() {
    return this.root;
  }

  //create a type Node of value and try to insert it into tree
  insert (value) {
    const node = new Node(value);

    // if tree root null, this node will be root
    if (this.root === null){
      this.root = node;
    
    // otherwise try to insert it to the left or right
    } else {
      this.insertNode(this.root, node);  
    }
  }

  // try to insert node to right if greater, and left if lower
  insertNode(node, newNode) {
    // if node value greater than newNode, insert it to the left
    if(node.value > newNode.value) {

      // if left node is null insert it to the left
      if (node.left === null) {
        node.left = newNode;

      // if not then recur until find left node null
      } else {
        this.insertNode(node.left, newNode);
      }

    // if current node less or equal than new node, insert to the right
    } else {

      // if right node is null insert it
      if(node.right === null) {
        node.right = newNode;

      // if not then recur until find right node null
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //try to remove node
  remove (value) {
    // if tree root null, cannot remove
    if (this.root === null){
      return 'The tree is empty';
    
    // otherwise try to insert it to the left or right
    } else {
      this.root = this.removeNode(this.root, value);  
    }
  }

  removeNode (node, toBeDeteleted) {
    // if found node to be deleted, return null
    if(node.value === toBeDeteleted) {

      //if node without children delete it
      if(node.left === null && node.right === null) {
        node = null;
        return null;

      //if node with children only to the left, assign it as the left child
      } else if(node.right === null) {
        node = node.left;
        return node;
      
      //if node with children only to the right, assign it as the right child
      } else if (node.left === null) {
        node = node.right;
        return node;
      
      //if node with both right and left children
      } else {
      
        //find min node to the right and assign it to aux
        var aux = this.findMinNode(node.right);
        
        //substitute node value for aux and delete it from right subtree
        node.value = aux.value;
        node.right = this.removeNode(node.right, aux.value);
        return node
      }
    
    //if node greater than to be deleted node, then search to the left
    } else if(node.value > toBeDeteleted) {
      node.left = this.removeNode(node.left, toBeDeteleted);
      return node;

    // if node less than to be deleted node, then search to the right
    } else if (node.value < toBeDeteleted) {
      node.right = this.removeNode(node.right, toBeDeteleted);
      return node;
    }
  }

  findMinNode(node) {
    // if left of a node is null the it is min node
    if(node.left === null) {
      return node;

    //if not search subtree to the left
    } else {
      return this.findMinNode(node.left);
    }
  }

  //performs a inOrder traversal
  inOrder(node) {
    if(node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  //performs a preOrder traversal
  preOrder(node) {
    if(node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  //performs a postorder traversal
  postOrder(node) {
    if(node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);

    }
  }

  //search for node based on value
  search(node, value) {
    if(node === null) {
      return null;
    }

    //if value is equal to node value, return found node
    if(node.value === value) {
      return node;
    
    // if node value greater than value search to the left subtree
    } else if (node.value > value) {
      this.search(node.left, value);

    // if node value less than value, serach to the right subtree
    } else if (node.value < value) {
      this.search(node.right, value);
    }
  }

}

module.exports = BinaryTree;