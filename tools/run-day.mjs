import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
const watch = args.includes('--watch');
const dayArg = args.find(a => /^\d{2}$/.test(a)) || process.env.DAY;

if (!dayArg) {
  console.error('Usage: npm run day -- <DD>  (e.g., 03)  or DAY=03 npm run day');
  process.exit(1);
}

const vitestArgs = watch
  ? ['vitest', '--watch', `exercises/day${dayArg}`]
  : ['vitest', 'run', `exercises/day${dayArg}`];

const proc = spawn('npx', vitestArgs, { stdio: 'inherit' });
proc.on('exit', code => process.exit(code));
