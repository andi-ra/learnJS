# Day 03 — Functions & FP (part 1)

**Reading:** _Modern JavaScript for the Impatient_, Ch. 3 (Functions)

**Goals**

- Rest & spread parameters
- Small pure helpers using `map`, `filter`, `reduce`
- Don’t mutate inputs

**Tasks**
Implement the functions in `solution.js` so the tests pass:

1. `sum(...xs)`

   - Accepts any number of values (numbers or numeric strings).
   - Ignores non-finite values (`NaN`, `Infinity`, `null`, `undefined`, non-numeric strings).

2. `uniqueHosts(urls = [])`

   - Returns an array of **lowercased** hostnames, **deduplicated** and **sorted**.
   - Ignore invalid URLs.

3. `topN(xs = [], n = 3)`
   - Returns the largest `n` **finite** numbers in **descending** order.
   - Must not mutate the original input.

**Run**

```bash
npm run day -- 03           # once
npm run day:watch -- 03     # watch mode
```
