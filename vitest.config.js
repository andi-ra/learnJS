import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['exercises/**/exercise.test.js'],
    exclude: ['exercises/_template/**'],   // <-- ignore template
    environment: 'node',
    coverage: { provider: 'v8' },
  },
});
