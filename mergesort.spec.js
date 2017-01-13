describe('Split Array function', function() {
  var array;

  beforeEach(function() {
    array = [5, 2, 4, 1, 3, 6];
  });

  it('is able to split an array into two halves', function() {
    expect( split(array) ).toEqual( [[5,2,4], [1,3,6]] );
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([1, 3, 5],[2, 4, 6]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
});

describe('Merge Sort', function(){
  var array;

  beforeEach(function() {
    array = [2, 576, 87, 2, 0, 1, 365, 4];
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort(array) ).toEqual( [ 0, 1, 2, 2, 4, 87, 365, 576 ] );
  });
});
