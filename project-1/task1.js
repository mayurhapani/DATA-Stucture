let arr = [3, 4, 5, 2, 3, 4, 5, 6];

k = 0;
temp = [];
temp[k] = arr[k];

function removeDup() {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] == temp[j]) {
        break;
      }
      if (i == j) {
        k++;
        temp[k] = arr[i];
        break;
      }
    }
  }
  arr = [];
  for (i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
}
console.log(arr);
removeDup();
// console.log(temp);
console.log(arr);
