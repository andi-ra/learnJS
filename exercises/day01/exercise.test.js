import { describe, it, expect } from 'vitest';
import { normalizeUrl, pickHeaders } from './solution.js';

describe('normalizeUrl', () => {
  it('joins with single slash', () => {
    expect(normalizeUrl('http://a/', '/b')).toBe('http://a/b');
    expect(normalizeUrl('http://a', 'b')).toBe('http://a/b');
    expect(normalizeUrl('http://a//', '//b')).toBe('http://a/b');
  });
});

describe('pickHeaders', () => {
  it('extracts with defaults', () => {
    expect(pickHeaders({ Age: '12', 'X-Cache': 'HIT' }))
      .toEqual({ age: 12, xCache: 'HIT' });
    expect(pickHeaders({}))
      .toEqual({ age: 0, xCache: 'BYPASS' });
  });
});
