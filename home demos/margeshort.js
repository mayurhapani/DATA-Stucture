let arr = [8, 10, 2, 9, 1, 6, 0, 7];

function margeSort(arr, si, ei) {
  console.log(arr, si, ei);
  if (si < ei) {
    let mid = (si + ei) / 2;
    console.log(mid);

    margeSort(arr, si, mid);
    //   margeSort(arr, mid + 1, ei);
  }
}

margeSort(arr, 0, arr.length - 1);
