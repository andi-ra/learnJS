# Day 01 — Values & Variables

Reading: Ch.1

Goals

- Object/array literals, destructuring with defaults
- Pure functions (no mutation)

Tasks

1. Implement `normalizeUrl(base, path)` → join with single slash, no trailing slash.
2. Implement `pickHeaders(obj)` → return `{ age, xCache }` where:
   - `age` comes from `obj['age']` or `obj['Age']` (number, default 0)
   - `xCache` from `obj['x-cache']` or `obj['X-Cache']` (string, default 'BYPASS')
