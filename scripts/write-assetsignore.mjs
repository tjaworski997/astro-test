import { mkdir, writeFile } from 'node:fs/promises';

const outputDir = new URL('../dist/', import.meta.url);
const assetsIgnoreFile = new URL('./.assetsignore', outputDir);

await mkdir(outputDir, { recursive: true });
await writeFile(assetsIgnoreFile, '_worker.js\n');
