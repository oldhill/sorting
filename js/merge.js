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
  * Process controller. Breaks arrays down recursively, merges back together.
  */
var mergeSort = function(input) {
  console.log('mergSort input: ' + input);
  // Base case
  if (input.length <= 1) {
    return input;
  }

  // Divide
  var medianIndex = Math.floor(input.length / 2);
  var left = input.slice(0, medianIndex);
  var right = input.slice(medianIndex, input.length);

  // Recur (sort sublists)
  left = mergeSort(left);
  right = mergeSort(right);

  // Merge
  return merge(left, right);
};

var my_array = [2, 3, 4, 3, -1, 2, 1, 8, 0, 5, 3, 5, 3, 5, 3,2, 5, 99];
console.log('Unsorted: ' + my_array);

var results = mergeSort(my_array);
console.log('Sorted: ' + results);