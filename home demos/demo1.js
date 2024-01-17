arr = [10, 20, 30, 40, 60, 70, 80];
var len = arr.length;

pos = 3;
vel = 500;
run = len - pos;

console.log(run);
for (i = 0; i < len; i++) {
  if (run > pos) {
    arr[len - i] = arr[len - i - 1];
    run--;
  } else if (i < pos) {
    // arr[len - i] = arr[len - i - 1];
  } else {
    arr[len - i] = arr[len - i - 1];
  }
}
arr[pos] = vel;

console.log(arr);
//----------------------------------------------------

// arr = [10, 20, 30, 40];
// var len = arr.length;
// vel = 20;

// for (i = 0; i < len; i++) {
//   if (arr[i] === vel) {
//     for (j = i; j < len; j++) {
//       arr[j] = arr[j + 1];
//     }
//   }
// }
// arr.length--;
// console.log(arr);
//--------------------------------------------------------

// arr = [10, 20, 30, 40];
// var len = arr.length;
// vel = 20;
// let flag = false;

// for (i = 0; i < len; i++) {
//   if (arr[i] === vel) {
//     flag = true;
//   }
//   if (flag) {
//     arr[i] = arr[i + 1];
//   }
// }
// arr.length -= 1;
// console.log(arr);
