/**
 * Merge sort
 *
 * http://en.wikipedia.org/wiki/Merge_sort
 */


 /**
  * Helper function. Merges two sorted arrays into a single sorted array.
  */
var merge = function(left, right) {
  sorted = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      if (left[0] <= right[0]){
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
    } else if (left.length) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted;
};

 /**
  * Process controller. Splits array into single element arrays, then merges them back together into one sorted array.
  */
var mergeSort = function(input) {
  // Base case. Single element array is always sorted.
  if (input.length < 2) {
    return input;
  }

  // Divide array into ~halves
  var medianIndex = Math.floor(input.length / 2);
  var left = input.slice(0, medianIndex);
  var right = input.slice(medianIndex, input.length);

  // Recur (sort sublists)
  var sorted_left = mergeSort(left);
  var sorted_right = mergeSort(right);

  // Merge
  return merge(sorted_left, sorted_right);
};

var my_array = [2, 3, 4, 3, -1, 2, 1, 8, 0, 5, 3, 5, 3, 5, 3,2, 5, 99];
console.log('Unsorted: ' + my_array);

var results = mergeSort(my_array);
console.log('Sorted: ' + results);