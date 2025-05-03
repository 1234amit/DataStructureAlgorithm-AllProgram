// function TreeNode(val, left=null, right=null){
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }

// //create nodes
// const root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right.right = new TreeNode(6);

// function preOrderTraversel(node){
//     if(!node) return;
//     console.log(node.val);
//     preOrderTraversel(node.left);
//     preOrderTraversel(node.right);
// }

// console.log("preorder Traversel: ");
// preOrderTraversel(root);

var Storm = function () {};
Storm.prototype.precip = 'rain';

var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';

var bob = new WinterStorm();
console.log(bob.precip);