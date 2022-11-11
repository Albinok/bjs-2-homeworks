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

  for (let number of arr) {
    sum += number;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let number of arrOfArr) {
    let sum = func(number);

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let differences = 0;

  for (let number of arr) {
    if (number > max) {
      max = number;
    }
    if ( number < min) {
      min = number;
    }
  }
  return differences = Math.abs(max - min);
}