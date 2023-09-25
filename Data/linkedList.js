const Node = require('./Node');

// Assuming you have a linked list with a head reference
class linkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        // step 1: create a new node with the data or payload
        const newHead = new Node(data);

        // step 2: Make the new node point to the current head if it exists
        newHead.setNextNode(this.head);
        // If there is already a head node, make the new node point to the current head
        if (this.head) {
            newHead.setNextNode(this.head);
        }

        // step 3: Update the head reference to the new node
        this.head = newHead;
    }

    /*
    1. We create a new node, newHead, with the provided data.
    2. We check if there is already a this.head. If there is, 
    we make newHead point to the current head by calling newHead.setNextNode(this.head). 
    This step ensures that the new node is properly linked to the current head.
    3. Finally, we update the this.head reference to point to newHead, 
    making the new node the new head of the linked list.

    Consider the initial state of the linked list, where A is the current head:
    Head --> A --> B --> C

    Now, we want to add a new node with data X to the head of the list.

    Step 1: Create a New Node X:

    Step 2: Make X Point to the Current Head (A):
    X --> A

    Step 3: Update the Head Reference to X:
    Head --> X --> A --> B --> C
    */
}

module.exports = linkedList;
