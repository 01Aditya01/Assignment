// for loop and continue
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// while loop and if-else
let i = 0;
while (i < 15) {
  if (i % 3 == 0) {
    console.log(`${i} is divisible by 3`);
  } else {
    console.log(`${i} is not divisible by 3`);
  }
  i++;
}

// Switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;

  case 5:
    day = "Friday";
    break;

  case 6:
    day = "Saturday";
}
console.log(day);

// Recursion

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(7));

// Binary Search Tree

class Node {
  constructor(key) {
    this.key = key;
    this.left = this.right = null;
  }
}
let root;
function insert(key) {
  if (root == null) {
    root = new Node(key);
    return root;
  }
  node = root;
  while (node) {
    prev = node;
    if (node.key > key) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  if (key > prev.key) {
    prev.right = new Node(key);
  } else {
    prev.left = new Node(key);
  }
  console.log(root);
}

function search(key) {
  node = root;
  while (node) {
    if (node.key == key) {
      return node;
    }
    if (key > node.key) {
      node = node.right;
    } else {
      node = node.left;
    }
  }
  return null;
}

console.log(search(13));

function deleteKey(node, key) {
  if (node == null) {
    return node;
  }
  if (key > node.key) {
    node.right = deleteKey(node.right, key);
  } else if (key < node.key) {
    node.left = deleteKey(node.left, key);
  } else {
    if (node.left == null) {
      return node.right;
    }
    if (node.right == null) {
      return node.left;
    }
    max_node = findMaxOnLeft(node.left);
    node.key = max_node.key;
    deleteKey(node.left, max_node.key);
  }
  return node;
}

function findMaxOnLeft(node) {
  while (node.right) {
    node = node.right;
  }
  return node;
}

console.log(deleteKey(root, 10));

// Closure

function multiplier(x) {
  return (y) => {
    return x * y;
  };
}

const multiply7 = multiplier(7);
const multiply14 = multiplier(15);

console.log(multiply7(8));
console.log(multiply14(10));
