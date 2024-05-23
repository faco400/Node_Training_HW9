class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  
  //inserting into linked list
  insert(value) {

    // creating node with value
    const newNode = new Node(value);

    // if head pointing to null, make it point to newNode
    if(this.head == null){
      this.head = newNode;
    
    // else navigate to end of linked list
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }

      //last node of linked list points to newNode
      current.next = newNode;
    }
  }

  // deleting node from linked list
  delete(value) {

    //if linked list is empty(head pointed to null) return False
    if(this.head === null) {
      return false;
    }

    // if head node is equal to value, change head to point to next 
    if(this.head.value === value){
      this.head = this.head.next;
      return true
    }

    // traverse linked list with current if next is not the value to delete
    let current = this.head;
    while(current.next && current.next.value !== value) {
      current = current.next;
    }

    //if next node after current is equal in value, delete it
    if(current.next && current.next.value === value) {
      current.next = current.next.next;
      return true
    }

    //if node not found return false
    return false
  }

  search(value) {
    //if linked list is empty(head pointed to null) return False
    if(this.head === null) {
      return false;
    }

    let current = this.head;
    while(current) {
      if(current.value === value)
        return current

      current = current.next;
    }

    //if node not found return false
    return false
  }

  printList() {
    //if linked list is empty(head pointed to null) return string
    if(this.head === null) {
      return 'head -> null'
    }

    let result = 'head ->';

    let current = this.head;
    while(current){
      result += `value:${current.value} ->`;
      current = current.next;
    }

    result += 'null'
    console.log(result);
  }

  //Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)
  hasCycle() {
    if(this.head === null)
      return null;

    let slow = this.head;// slow pointer (Tortoise) 
    let fast = this.head;// fast pointer (Hare) 

    while(fast !== null && fast.next !== null){
      slow = slow.next; // -> move 1 position  
      fast = fast.next.next;// -> Move 2 postions

      //if slow and fast pointer are equal then we have a cycle
      if(slow === fast) {
        return true;
      }
    }

    //if no cycle found return false
    return false;
  }

  //helper method for testing purposes
  // it creates a cycle makind the end node point to head node
  createCycle(){
    let current = this.head;

    while(current.next){
      current = current.next;
    }

    current.next = this.head;
  }

}

module.exports = LinkedList;