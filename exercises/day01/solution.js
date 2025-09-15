export function normalizeUrl(base, path) {
  const b = String(base).replace(/\/+$/, '');
  const p = String(path).replace(/^\/+/, '');
  return `${b}/${p}`;
}

export function pickHeaders(obj = {}) {
  const ageRaw = obj.age ?? obj.Age ?? 0;
  const age = Number.isFinite(Number(ageRaw)) ? Number(ageRaw) : 0;
  const x = obj['x-cache'] ?? obj['X-Cache'] ?? 'BYPASS';
  return { age, xCache: String(x) };
}
