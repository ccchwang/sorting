describe('Split Array function', function() {
  beforeEach(function() {
    var array = [5, 2, 4, 1, 3, 6];
  })


  it('is able to split an array into two halves', function() {
    expect( split([5, 2, 4, 1, 3, 6]) ).toEqual( [[5,2,4], [1,3,6]] );
  });


});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( merge([[5,2, 4], [1,3, 6]]) ).toEqual( [5, 2, 4, 1, 3, 6] );
  });
});


describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect( mergeSort([5, 4, 2, 1]) ).toEqual( [1, 2, 3, 4, 5, 6] );
  });
});
