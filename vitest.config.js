// vitest.config.ts (root of repo)
import { defineConfig } from 'vitest/config';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url)); // absolute repo root

export default defineConfig({
  root, // <-- force Vitest to use the repo root no matter where it’s launched from
  test: {
    include: ['**/exercises/**/exercise.test.js'], // CWD-agnostic
    exclude: ['**/exercises/_template/**'],
    environment: 'node',
    // globals: true, // (optional) if you want to use `test()` without importing from 'vitest'
  },
});
