class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node){
        if(node instanceof Node || node === null){
            this.next = node
        } else {
            throw new Error("Input is not a node")
        }
    }

    getNextNode() {
        return this.next
    }
}


const node1 = new Node(10);
const node2 = new Node(20)
const node3 = new Node(30)

node1.setNextNode(node2)
console.log(node1);
// console.log(node1.getNextNode(node3));

module.exports = Node
