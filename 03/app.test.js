import randomNumber from './app';

test('Losowanie dowolnej liczby z podanego przedziału', () => {
  const min = 10;
  const max = 10  ;
  for (let i=0; i<10; i++) {
    const number = randomNumber(min, max);
    console.log(number);
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThanOrEqual(max);
  }
  }
)