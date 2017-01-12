function bubbleSort(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  var i=0;

  while (i<array.length) {
    for (var j=0; j<array.length-1; j++) {
      if (array[j] > array[j+1]) {
        swap(array[j], array[j+1], array, j)
      }
    }
    i++
  }
return array;
}

// hold onto bigger value

var swap = function (val1, val2, array, j) {
  array[j] = val2;
  array[j+1] = val1;
  return array;
}

