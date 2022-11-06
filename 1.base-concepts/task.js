"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let x;
  // let quadraticEquation = a*x**2+b*x+c;
  if (d < 0) {
    console.log('корней нет')
  } else if (d = 0) {
    x = -b/(2*a);
    arr.push(x); 
  }

  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
