import { describe, it, expect } from 'vitest';
import { normalizeUrl, pickHeaders } from './solution.js';

describe('normalizeUrl', () => {
  it('joins with single slash', () => {
    expect(normalizeUrl('http://a/', '/b')).toBe('http://a/b');
    expect(normalizeUrl('http://a', 'b')).toBe('http://a/b');
    expect(normalizeUrl('http://a//', '//b')).toBe('http://a/b');
    expect(normalizeUrl('http://a//', 'b?x=1#y')).toBe('http://a/b?x=1#y');
    expect(normalizeUrl('http://a//', '')).toBe('http://a');

  });
});

describe('pickHeaders', () => {
  it('extracts with defaults', () => {
    expect(pickHeaders({})).toEqual({ age: 0, xCache: 'BYPASS' });
    expect(pickHeaders({ Age: '12', 'X-Cache': 'HIT' })).toEqual({ age: 12, xCache: 'HIT' });
  });
});
