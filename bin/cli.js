#!/usr/bin/env node
const { greet } = require('../src/index');

const name = process.argv[2] || 'friend';
console.log(greet(name));
