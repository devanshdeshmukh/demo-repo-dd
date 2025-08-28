// function findMinMaxLoop(arr) {
//   if (arr.length === 0) return null;

//   let min = arr[0];
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   return { min, max };
// }

// // Example usage:
// const numbers = [10, 25, 3, 99, 56, 1];
// console.log(findMinMaxLoop(numbers));
// // Output: { min: 1, max: 99 }





// let name = "Jack";
// let sum = function(a, b){
//   return a+b;
// }

// let hello = function(){
//   console.log("hello");
// }





const student = {
  name: "menos",
  age: 21,
  phy: 89,
  eng: 95,
  maths: 90,
  getAvg(){
    let avg = (this.phy + this.eng + this.maths)/3;
    console.log(avg);
  }
}