import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || join(__dirname, 'output');

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(__dirname, 'entry.png'), join(outputDir, 'entry.png'));
console.log(`Copied entry.png to ${outputDir}`);
