import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const files: any[] = [join('index.js')]
// const files: any[] = [join('index.js'), join('index.d.ts')]

for (const file of files) {
    const fileData: object = readFileSync(file);
    const result: string = fileData.toString().replace(new RegExp(/\.\/util/, 'g'), './src/util')

    writeFileSync(file, result);
}
