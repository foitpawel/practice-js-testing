import randomNumber from './app';

test('Losowanie dowolnej liczby z podanego przedziału', () => 
  expect (
    randomNumber([1, 10])
  ).toEqual([1, 10])
)