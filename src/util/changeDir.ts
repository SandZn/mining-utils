import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const files = [join('index.js'), join('index.d.ts')]

for (const file of files) {
    const fileData = readFileSync(file);

    const result = fileData.toString().replace('./util', './src/util')

    writeFileSync(file, result);
}
