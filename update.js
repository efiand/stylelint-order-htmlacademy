import fetch from 'cross-fetch';
import chalk from 'chalk';
import { writeFile } from 'node:fs/promises';

const { cyan, green, red } = chalk;
const { npm_package_name, npm_package_version } = process.env;

const SOURCE_URL = 'https://raw.githubusercontent.com/htmlacademy/codeguide/master/.postcss-sorting.json';

const packagePrefix = cyan(`[${npm_package_name} ${npm_package_version}]: `);

/**
 * Обновление настроек из удаленного источника
 *
 * @param {Function} cb
 */
export default async (cb) => {
	try {
		const res = await fetch(SOURCE_URL);
		const body = await res.json();
		await writeFile('./properties.js', `export default ${JSON.stringify(cb(body))}`);
		console.info(packagePrefix + green(`Data was successfully updated!`));
		process.exit(0);
	} catch (err) {
		console.error(packagePrefix + red(`Update error, run "node node_modules/${npm_package_name} -u"`));
		process.exit(1);
	}
};
