"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  let x;
  let x2;
  // let quadraticEquation = a*x**2+b*x+c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    x = -b / (2 * a);
    arr.push(x); 
  } else {
    x = (-b + Math.sqrt(d)) / (2 * a);
    arr.push(x);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x2);
  }
  return arr; // array
}

// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
