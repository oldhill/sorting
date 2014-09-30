/**
 * Merge sort
 */
var merge = function(left, right) {
  sorted = []
  while (left.length > 0 || right.length > 0) {
    if (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]){
        sorted.push(left[0]);
        left = left.slice(1, left.length);

      }
    }
  }

}

var mergeSort = function(input) {
  // Base case
  if (input.length <= 1) {
    return input;
  }

  // Divide
  var medianIndex = Math.floor(input.length / 2);
  var left = input.slice(0, medianIndex);
  var right = input.slice(medianIndex, medianIndex.length);

  // Recur
  left = mergefSort(left);
  right = mergeSort(right);

  // Conquer
  return merge(left, right)
}

var my_array = [2, 3, 4, 3, -1, 2, 1, 8, 0, 5, 3, 5, 3, 5, 3,2, 5, 99];
console.log('Unsorted: ' + my_array);

var results = mergeSort(my_array);
console.log('Sorted: ' + results.sorted);
console.log('In: ' + results.elapsedTime + ' milliseconds.');
