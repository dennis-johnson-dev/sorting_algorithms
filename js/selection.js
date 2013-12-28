'use strict'

var array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function sort(array) {
  var min = 0;
  var swap = 0;
  for (var i = 0; i < array.length; i++) {
    // find min
    min = i;
    for (var j = i; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // swap
    swap = array[i];
    array[i] = array[min];
    array[min] = swap;
  }
}

sort(array);
console.log(array);
