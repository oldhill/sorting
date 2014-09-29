/**
 * Bubble sort with timer
 */
var bubbleSort = function(input) {
  var startTimer = new Date();
  var sorted = 'false';
  var swapper = 0;

  while (sorted === 'false') {
    sorted = 'true'; 
    for (var i = 0; i < input.length; i++) {
      if (input[i] > input[i + 1]) {
        swapper = input[i];
        input[i] = input[i + 1];
        input[i + 1] = swapper;
        sorted = 'false';
      }
    }      
  }
  var stopTimer = new Date();
  var results = {
    elapsedTime: stopTimer - startTimer,
    sorted: input
  };
  return results;
}

var my_array = [2, 3, 4, 3, -1, 2, 1, 8, 0, 5, 3, 5, 3, 5, 3,2, 5, 99];
console.log('Unsorted: ' + my_array);

var results = bubbleSort(my_array);
console.log('Sorted: ' + results.sorted);
console.log('In: ' + results.elapsedTime + ' milliseconds.');
