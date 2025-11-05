function outer() {
  let count = 0; // outer ka variable

  function inner() {
    count++;
    console.log("Count:", count);
  }

  return inner; // returning inner function
}

const counter = outer(); // outer() call hua
counter(); // Output: Count: 1
counter(); // Output: Count: 2
counter(); // Output: Count: 3
