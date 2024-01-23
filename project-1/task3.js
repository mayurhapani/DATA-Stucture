let arr = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];
tempArr = [[], [], [], []];
function TransposeMatrix() {
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 5; j++) {
      console.log(arr[j][i]);

      tempArr[i][j] = arr[j][i];
    }
  }
}

console.log(arr);
TransposeMatrix();

console.log(tempArr);
