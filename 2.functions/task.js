// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  min = arr[0];
  max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } 
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  
   return { min: min, max: max, avg: avg};
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let sum;
  for (let i = 0; i < arrOfArr.length; i++) {
    sum = worker(arrOfArr[0]);
    if (sum > worker(arrOfArr[i])) {
      max = sum;
    } else {
      max = worker(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
