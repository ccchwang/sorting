describe('Bubble Sort', function(){
  beforeEach(function() {
    var array = [5, 2, 4, 1, 3];
  })
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the values', function() {
    expect(bubbleSort([5, 2, 4, 1, 3])).toEqual([1, 2, 3, 4, 5])
  });
  it('sorts the values', function() {
    expect(bubbleSort([7, 5, 3, 1])).toEqual([1, 3, 5, 7])
  });
});

describe('Swap', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([7, 5, 3, 1]);
  })

  it('how many times swapped', function() {
    expect(window.swap.calls.count()).toEqual(6);
  });
});
