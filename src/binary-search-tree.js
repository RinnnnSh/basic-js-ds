const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.roo = null;
  }

  root() {
    return this.roo
  };

  add(data) {
    this.roo = addWithin(this.roo, data);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value)
      };
      if (node.data === value) {
        return node
      };
      if (value < node.data) {
        node.left = addWithin(node.left, value)
      };
      if (value > node.data) {
        node.right = addWithin(node.right, value)
      }
      return node
    }
  };

  has(data) {
    return searchWithin(this.roo, data);

    function searchWithin(node, value) {
      if (!node) {
        return false
      };
      if (node.data === value) {
        return true
      };
      if (node.data > value) {
        return searchWithin(node.left, value)
      };
      if (node.data < value) {
        return searchWithin(node.right, value)
      };
    }
  };

  find(data) {
    return findWithin(this.roo, data);

    function findWithin(node, value) {
      if (!node) {
        return null
      };
      if (node.data === value) {
        return node
      };
      if (node.data > value) {
        return findWithin(node.left, value)
      };
      if (node.data < value) {
        return findWithin(node.right, value)
      };
    }
  }

  remove(data) {
    this.roo = removeNode(this.roo, data);

    function removeNode (node, value) {
      if (!node) {
        return null
      };
      if (value < node.data) {
        node.left = removeNode(node.left, value)
        return node;
      };
      if (value > node.data) {
        node.right = removeNode(node.right, value)
        return node;
      };
      if (value === node.data) {

        if (!node.right && !node.left) {
          return null
        };
        if (!node.right) {
          node = node.left;
          return node
        };
        if (!node.left) {
          node = node.right
          return node
        };

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        };
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node
      };
    }

  }

  min() {
    return minWithin(this.roo);

    function minWithin(node) {
      if (!node) {
        return null
      };
      if (!node.left) {
        return node.data
      };
        return minWithin(node.left)
    }
  }

  max() {
    return maxWithin(this.roo);

    function maxWithin(node) {
      if (!node) {
        return null
      };
      if (!node.right) {
        return node.data
      };
        return maxWithin(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree
};
