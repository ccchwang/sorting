function split(wholeArray) {
  var middleNum = wholeArray.length / 2;
  var firstHalf = wholeArray.splice(0, middleNum);
  var secondHalf = wholeArray;

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var newArray = [],
      pointer1 = 0;
      pointer2 = 0;;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] > arr2[pointer2]) {
      newArray.push(arr2[pointer2]);
      pointer2++;
    } else {
      newArray.push(arr1[pointer1]);
      pointer1++;
    }
  }
  if (pointer1 === arr1.length) {return newArray.concat(arr2.slice(pointer2))}
  else {return newArray.concat(arr1.slice(pointer1))}

  return newArray;
}

function mergeSort(array) {

  if (array.length <= 1) {
    return array;
  }
  else {
      var splitArray = split(array)
      var firstHalf = splitArray[0];
      var secondHalf = splitArray[1];

//mergeSort splits halves all the way down to single items. merge sorts and concats each item;
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
