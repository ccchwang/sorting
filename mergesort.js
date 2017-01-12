function split(wholeArray) {

  var middleNum = Math.floor( (wholeArray.length) / 2)
  var firstHalf = wholeArray.splice(0, middleNum)
  var secondHalf = wholeArray


  return [firstHalf, secondHalf];
}


function merge(arr1, arr2){
  var newArray = [];

  for (var i=0; i<arr1.length; i++) {



  }

}

function mergeSort(array) {

  if (array.length===1) {
    return array
  }
  else {
      var splittedArray = split(array)

      var firstHalf = splittedArray[0];
      var secondHalf = splittedArray[1];

      return merge(mergeSort(firstHalf), mergeSort(secondHalf))





  }



}
