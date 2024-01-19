function partition(arr, si, ei) {
  let pivot = arr[ei];
  let i = si - 1;

  for (j = si; j < ei; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[ei]] = [arr[ei], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, si, ei) {
  //   console.log(arr, si, ei);
  if (si <= ei) {
    let part = partition(arr, si, ei);
    quickSort(arr, si, part - 1);
    quickSort(arr, part + 1, ei);
  }
}

let arr = [8, 10, 2, 9, 1, 6, 0, 7];

console.log("Orignal arr = ", arr);
quickSort(arr, 0, arr.length - 1);

console.log("Sorted arr = ", arr);
