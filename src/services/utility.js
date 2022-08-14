//place traget in sorted array, length stay const
export function placeScore(arr, target) {
  if (target > arr[arr.length - 1]) return false;
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left < right) {
    mid = left + (right - left) / 2;
    // if (arr[mid] == target) return mid;
    if (arr[mid].score < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return true;
  //return object id that should be deleted
}
