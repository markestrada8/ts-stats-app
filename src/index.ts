import { readFileSync } from 'node:fs';

// macOS, Linux, and Windows
const newFile = readFileSync('/football.csv');

console.log(newFile)
