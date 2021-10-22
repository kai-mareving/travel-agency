import { discountPrice } from '../utils/discountPrice';

describe('Function discountPrice', () => {
  it('should return null when called with no arg', () => {
    expect(discountPrice()).toBe(null);
    expect(discountPrice(0)).toBe(null);
    expect(discountPrice('')).toBe(null);
    expect(discountPrice('', '')).toBe(null);
    expect(discountPrice(0, '')).toBe(null);
    expect(discountPrice('', 0)).toBe(null);
    expect(discountPrice('$51,380.61', 'three')).toBe(null);
    expect(discountPrice('two', '50')).toBe(null);
    expect(discountPrice('nine', 50)).toBe(null);
    expect(discountPrice(null, null)).toBe(null);
  });

  it('should return correct value', () => {
    expect(discountPrice('$51,380.61', 50)).toEqual(2569030.5);
    expect(discountPrice('$139,398.25', 50)).toEqual(6969912.5);
    expect(discountPrice('$51,380.61', '50%')).toEqual(2569030.5);
    expect(discountPrice('$51,380.61', '50.30%')).toEqual(2553616.32);
    expect(discountPrice('$51,380.61', '50,30%')).toEqual(2553616.32);
    expect(discountPrice('$9,552.96', '50%')).toEqual(477648);
  });
});
