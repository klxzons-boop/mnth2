function getMaxValue(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

let arr1 = [3, 7, 2, 9, 5];
let arr2 = [15, 4, 20, 8];
let arr3 = [-10, -3, -25, -1];

console.log(getMaxValue(arr1));
console.log(getMaxValue(arr2));
console.log(getMaxValue(arr3));
