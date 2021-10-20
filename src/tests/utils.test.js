import { formatTime } from '../utils/formatTime.js';

describe('Function formatTime', () => {
  it('should return null when called with no arg', () => {
    expect(formatTime()).toBe(null);
    expect(formatTime(0)).toBe(null);
    expect(formatTime('')).toBe(null);
  });

  it('should return null if arg not a number', () => {
    expect(formatTime('pony')).toBe(null);
    expect(formatTime(() => {})).toBe(null);
  });

  it('should return null when called with number < 0', () => {
    expect(formatTime(-1)).toBe(null);
    expect(formatTime(-3)).toBe(null);
  });

  it('should return correct time in hh:mm:ss format', () => {
    expect(formatTime(122)).toBe('00:02:02');
    expect(formatTime(3793)).toBe('01:03:13');
    expect(formatTime(120)).toBe('00:02:00');
    expect(formatTime(3604)).toBe('01:00:04');
  });
});
