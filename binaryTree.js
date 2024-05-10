/*
  Just refreshing myself on stuffs learned back in uni on DSA
*/
class BinaryNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  searchNode (key) {

  }
  
  insertNode (key) {
    const newNode = new BinaryNode(key);

    if(this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while(currentNode) {
      if(newNode.key < currentNode.key) {
        if(currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
  
      if(newNode.key > currentNode.key) {
        if(currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  
  deleteNode (key) {
  
  }

  displayTree() {
    if(this.root === null) {
      console.log('Empty Tree');
    }

    let currentNode = this.root;
    while(currentNode) {
      console.log(currentNode.key)

    }
  }

  getTreeHeight(node) {
    if(node === null) {
      return 0;
    }
    let leftHeight = this.getTreeHeight(node.left);
    let rightHeight = this.getTreeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  getTreeWidth(node) {

  }

  printInOrder(node) {
    if(node === null) {
      return;
    }

    this.printInOrder(node.left);
    process.stdout.write(node.key + ' ');
    this.printInOrder(node.right);
  }

  printPreOrder(node) {
    if(node === null) {
      return;
    }

    process.stdout.write(node.key + ' ');
    this.printPreOrder(node.left);
    this.printPreOrder(node.right);
  }

  printPostOrder(node) {
    if (node === null) {
      return;
    }

    this.printPostOrder(node.left);
    this.printPostOrder(node.right);
   
    process.stdout.write(node.key + ' ');
  }
}

function run (list) {
  const binTree = new BinarySearchTree();
  list.forEach((el,index) => {
    binTree.insertNode(el);
  });

  console.log('Height: ', binTree.getTreeHeight(binTree.root));

  process.stdout.write('In Order: ')
  binTree.printInOrder(binTree.root);
  process.stdout.write('\n');

  process.stdout.write('Pre Order: ')
  binTree.printPreOrder(binTree.root);
  process.stdout.write('\n');

  process.stdout.write('Post Order: ')
  binTree.printPostOrder(binTree.root);
  process.stdout.write('\n');
}

const arr = [5,1,6,3,8,4,9,7,0,2];
run(arr);