'use strict'
// selection sort

module.exports = function (array, compare) {
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
  return array;
};
