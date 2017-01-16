function bubbleSort(array) {
  var i=0, len = array.length-1;

  while (i<array.length) {
    for (var j=0; j<len; j++) {
      if (array[j] > array[j+1]) {
        swap(array, j);
      }
    }
    i++;
    len--;
  }
return array;
}
// hold onto bigger value
var swap = function (array, j) {
  var val1 = array[j];
  array[j] = array[j+1];
  array[j+1] = val1;
  return array;
}

