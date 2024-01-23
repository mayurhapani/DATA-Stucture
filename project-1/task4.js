arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
tempArr = [[], [], [], []];

function arr90Deg() {
  for (i = 3; i >= 0; i--) {
    for (j = 0; j < 4; j++) {
      console.log(arr[j][i]);

      tempArr[3 - i][j] = arr[j][i];
    }
  }
}

console.log(arr);
arr90Deg();

console.log(tempArr);
