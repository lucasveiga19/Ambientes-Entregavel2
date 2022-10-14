const func = require('./algorithmFunc');

test('2 is prime ?', () => {
  expect(func.isPrime(2)).toBe(true);
});

test('4 is not prime ?', () => {
    expect(func.isPrime(4)).toBe(false);
});

test('4, 5 and 6 sum equals 15',()=>{
    expect(func.summation([4,5,6])).toBe(15)
})

test('1, 3 and 6 sum equals 10',()=>{
    expect(func.summation([1,3,6])).toBe(10)
})

test('fibo position in 4 equals a 2',()=>{
    expect(func.fibonacciWithouRecursion(4)).toBe(2)
})

test('fibo position in 20 equals a 4181',()=>{
    expect(func.fibonacciWithouRecursion(20)).toBe(4181)
})

test('mdc 18 and 10 equals a 2',()=>{
    expect(func.mdc(18,10)).toBe(2)
})

test('mdc 320 and 480 equals a 160',()=>{
    expect(func.mdc(320,480)).toBe(160)
})

test('quicksort test in 6,5,8 array to 5,6,8',()=>{
    expect(func.quickSort([6,5,8]).toString()).toBe([5,6,8].toString())
})

test('quicksort test in 11.5,12,12.5,5,8 array to 5,9,8,11.5,12,12.5',()=>{
    expect(func.quickSort([11.5,12,12.5,5,8,9]).toString()).toBe([5,8,9,11.5,12,12.5].toString())
})

test('return numbers of array 4,5,3,2,8 bigger than 4 equals a 2',()=>{
    expect(func.intCount(4,[4,5,3,2,8])).toBe(2)
})

test('return numbers of array 1,2,3,5,8 bigger than 8 equals a 0',()=>{
    expect(func.intCount(8,[1,2,3,5,8])).toBe(0)
})



