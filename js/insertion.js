/**
 * Insertion sort with timer
 */
var insertionSort = function(input) {
  var startTimer = new Date();
  var swapper = 0;

  for (var i = 1; i < input.length; i++) {
    var j = i;
    // Move element i to the correct place in the already array to its 'left',
    // by swapping it with each element it's greater than, one at a time.
    while (j > 0 && input[j-1] > input[j]) {
      swapper = input[j-1];
      input[j-1] = input[j];
      input[j] = swapper;
      j -= 1;
    }
  }

  var stopTimer = new Date();
  var results = {
    elapsedTime: stopTimer - startTimer,
    sorted: input
  };
  return results;
}

var my_array = [2, 3, 4, 3, -1, 2, 1, 8, 0, 100, 5, 3, 5, 3, 5, 3, 2, 5, 99];
console.log('Unsorted: ' + my_array);

var results = insertionSort(my_array);
console.log('Sorted: ' + results.sorted);
console.log('In: ' + results.elapsedTime + ' milliseconds.');
