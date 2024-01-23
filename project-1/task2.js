let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// let tempArr = [3][3];
let tempArr = [[], [], []];

function printCol() {
  for (i = 0; i < 3; i++) {
    for (j = 2; j >= 0; j--) {
      //   console.log(i);
      //   console.log(j);

      console.log(arr[j][i]);

      tempArr[i][2 - j] = arr[j][i];
    }
  }
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      arr[i][j] = tempArr[i][j];
    }
  }
}
console.log(arr);
printCol();
// console.log(tempArr);
console.log(arr);
