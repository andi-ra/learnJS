# Day 02 — Control Structures

**Reading:** Ch. 2 — Control Structures (if/switch/loops, truthy/falsy)

## Goals

- Practice `if`, `switch`, and simple loops.
- Handle edge cases (`NaN`, `null`, `undefined`, strings).
- Keep functions **pure** (don’t mutate inputs).

## Tasks (implement in `solution.js`)

1. `firstFinite(xs)`  
   Return the **first finite number** in the iterable `xs`.

   - Accept numbers or **numeric strings** (e.g., `'3.5'` → 3.5).
   - Ignore `NaN`, `Infinity`, non-numeric strings, `null`, `undefined`.
   - If nothing valid is found, return `null`.

2. `classifyStatus(code)`  
   Classify an HTTP status code into buckets: `'2xx' | '3xx' | '4xx' | '5xx' | 'other'`.
   - Accept a number or a numeric string.
   - Anything outside 200–599 → `'other'`.

### Run

```bash
npm run day -- 02
npm run day:watch -- 02
```
