import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import { extname, join } from 'path';

if (existsSync(join('dist'))) {
	let data = "";
  	const files = readdirSync(join('dist'));
	const declarationFiles = files.filter(x => extname(x) === '.ts');

	for (const declarationFile of declarationFiles) {
		const fileData = readFileSync(join('dist', declarationFile)).toString();
		data += fileData;
	}

	if (data) {
		writeFileSync(join('index.d.ts'), data);
	}
}
