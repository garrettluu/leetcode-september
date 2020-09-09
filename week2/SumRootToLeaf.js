/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  let paths = getPaths(root, "");
  let ans = 0;
  paths.forEach((path) => {
    ans += binaryToNum(path);
  });
  return ans;
};

var getPaths = function(root, path) {
  let res = [];

  //Base cases
  path = path.concat(root.val);
  if (root.left) {
    let paths = getPaths(root.left, path.slice());
    paths.forEach((path) => {
      res.push(path);
    })
  }

  if (root.right) {
    let paths = getPaths(root.right, path.slice());
    paths.forEach((path) => {
      res.push(path);
    })
  }

  if (!root.left && !root.right) {
    res.push(path);
  }

  return res;
}

var binaryToNum = function(bin) {
  let factor = 1;
  let ans = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    ans += bin[i] * factor;
    factor *= 2;
  }
  return ans;
}