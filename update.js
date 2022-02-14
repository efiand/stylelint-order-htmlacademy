import fetch from 'node-fetch';
import chalk from 'chalk';
import { fs, getJSON, __dirname } from './esm.js';
const { cyan, green, red } = chalk;

/**
 * Обновление настроек из удаленного источника
 *
 * @param {Function} cb
 */
const update = async (cb) => {
	const { name, sourceUrl, version } = await getJSON(`${__dirname}/package.json`);
	const packagePrefix = cyan(`[${name} ${version}]: `);

	let data = {};
	try {
		const res = await fetch(sourceUrl);
		const body = await res.json();
		data = JSON.stringify(cb(body));
		await fs.writeFile(`${__dirname}/data.json`, data);
		console.info(packagePrefix + green(`Data was successfully updated!`));
		process.exit(0);
	} catch (err) {
		console.error(err);
		console.error(packagePrefix + red(`Update error, run "node node_modules/${name} -u"`));
		process.exit(1);
	}
};

export default update;
