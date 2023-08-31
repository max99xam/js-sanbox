// Tree Traversal Techniques:
// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/

// Task description.
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Examples:
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]
 
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
 
// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Solution 1. Recursive
// Time complexity: O(n)
// Space complexity: O(n

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    const traversal = [];
    solve(root);
    
    function solve(root) {
        if(root !== null) {
            solve(root.left);
            traversal.push(root.val);
            solve(root.right);
        }
    }

    return traversal;
};
