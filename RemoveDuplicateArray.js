function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

// Example usage:
let str = "hello";
console.log(removeDuplicates(str)); // Output: "helo"
