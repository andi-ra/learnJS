import { describe, it, expect } from 'vitest';
import { sum, uniqueHosts, topN } from './solution.js';

describe('sum(...xs)', () => {
  it('adds numbers and numeric strings', () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(1, '2', 3)).toBe(6);
    const arr = [10, '5', 2];
    expect(sum(...arr)).toBe(17); // spread at call site
  });

  it('ignores non-finite / non-numeric values', () => {
    expect(sum(1, NaN, Infinity, 'foo', null, undefined)).toBe(1);
  });
});

describe('uniqueHosts(urls)', () => {
  it('deduplicates, lowercases, and sorts hostnames', () => {
    const urls = [
      'http://A.com/x',
      'https://a.com/y',
      'http://b.org',
      'http://B.org/again',
      'not-a-url'
    ];
    expect(uniqueHosts(urls)).toEqual(['a.com', 'b.org']);
  });

  it('does not mutate the input', () => {
    const urls = ['http://a.com', 'http://b.com'];
    const copy = urls.slice();
    uniqueHosts(urls);
    expect(urls).toEqual(copy);
  });
});

describe('topN(xs, n)', () => {
  it('returns the largest n finite numbers in descending order', () => {
    expect(topN([3, 10, 2, 7], 2)).toEqual([10, 7]);
    expect(topN([3, 10, 2, 7], 10)).toEqual([10, 7, 3, 2]);
  });

  it('ignores NaN/Infinity and does not mutate input', () => {
    const data = [5, NaN, 9, Infinity, 4];
    const before = data.slice();
    expect(topN(data, 3)).toEqual([9, 5, 4]);
    expect(data).toEqual(before);
  });

  it('defaults to n = 3', () => {
    expect(topN([8, 1, 6, 7, 2])).toEqual([8, 7, 6]);
  });
});
