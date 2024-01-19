let arr = [8, 10, 2, 9, 1, 6, 0, 7];

function marge(arr, si, mid, ei) {
  let leftIndex = si;
  let rightIndex = mid + 1;
  let x = si;
  let temp = [];

  while (leftIndex <= mid && rightIndex <= ei) {
    if (arr[leftIndex] < arr[rightIndex]) {
      temp[x++] = arr[leftIndex++];
    } else {
      temp[x++] = arr[rightIndex++];
    }
  }
  while (leftIndex <= mid) {
    temp[x++] = arr[leftIndex++];
  }
  while (rightIndex <= ei) {
    temp[x++] = arr[rightIndex++];
  }
  console.log(temp);
  for (i = si; i <= ei; i++) {
    arr[i] = temp[i];
  }
}

function margeSort(arr, si, ei) {
  // console.log(arr, si, ei);

  if (si < ei) {
    let mid = Math.floor((si + ei) / 2);
    // console.log(mid);

    margeSort(arr, si, mid);
    margeSort(arr, mid + 1, ei);
    marge(arr, si, mid, ei);
  }
}

margeSort(arr, 0, arr.length - 1);
