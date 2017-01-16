'use strict';
/* global bubbleSort inOrder swap */

var numerically = function (a, b) { return a - b; }

var generateArray = function (size, lower, upper) {
  var randomArray = [];
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArray.push(randomNum);
  }
  return randomArray;
}

describe('Bubble Sort', function(){

  it('sorts an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array of one element', function(){
    expect( bubbleSort([7]) ).toEqual( [7] );
  });

  // it('sorts an array of many elements', function(){
  //   expect( bubbleSort([5, 2, 7, 9, 3, 5, 4, 1, 0]) ).toEqual([0, 1, 2, 3, 4, 5, 5, 7, 9]);
  // });

  for (var i = 2; i < 103; i += 20) {
    it('sorts an array of ' + i + ' random items', function(){
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);
      expect( bubbleSort(arr) ).toEqual( sorted );
    });
  }

  it('swaps the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([4, 6, 5, 1]);
    expect(swap.calls.count()).toEqual(4);
  });

});
