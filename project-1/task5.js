let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let tempArr = [];
let k = 0;

function printCol() {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if (i == 0 || i == 2 || i == j) {
        tempArr[k++] = arr[i][j];
      }
    }
  }
}
console.log(arr);
printCol();
console.log(tempArr);
