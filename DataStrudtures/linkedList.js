// Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Create nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);
const node4 = new Node(40);

// Link the nodes together
node1.next = node2;
node2.next = node3;
node3.next = node4;

/*
In this example, the printLinkedList function takes the starting node of the linked list as an argument and then iterates through the list by following the next pointers. 
It prints out the data value of each node as it traverses the list. When you call printLinkedList(node1), it will print:
*/

// Function to print the linked list
function printLinkedList(node) {
    let current = node;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
}

// Print the linked list starting from node1
printLinkedList(node1);

