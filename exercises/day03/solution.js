// Day 03 — Functions & FP (part 1)

export function sum(...xs) {
  // Treat numeric strings as numbers; ignore non-finite values
  return xs.reduce((acc, v) => {
    const n = Number(v);
    return Number.isFinite(n) ? acc + n : acc;
  }, 0);
}

export function uniqueHosts(urls = []) {
  // Map → extract hostname (lowercased), filter invalid, then dedupe + sort
  const hosts = new Set();
  for (const u of urls) {
    try {
      const host = new URL(u).hostname.toLowerCase();
      hosts.add(host);
    } catch {
      // ignore invalid URLs
    }
  }
  return [...hosts].sort();
}

export function topN(xs = [], n = 3) {
  // Keep only finite numbers, make a copy, sort descending, take n
  const nums = xs.filter(Number.isFinite);
  const sortedDesc = nums.slice().sort((a, b) => b - a);
  return sortedDesc.slice(0, n);
}
