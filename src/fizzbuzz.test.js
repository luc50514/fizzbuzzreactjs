import Fizzbuzz from './Fizzbuzz';

test('should return 1 when given 1', () => {
    expect(Fizzbuzz(1)).toBe("1");
  });
  test('should return 2 when given 2', () => {
    expect(Fizzbuzz(2)).toBe("2");
  });
  test('should return Fizz when given 3', () => {
    expect(Fizzbuzz(3)).toBe("Fizz");
  });