'use strict';

const { writeFile } = require(`fs`).promises;
const fetch = require(`node-fetch`);
const { cyan, green, red } = require(`chalk`);
const { name, sourceUrl, version } = require(`./package.json`);
const packagePrefix = cyan(`[${name} ${version}]: `);
const dirname = __dirname.replace(/\\/g, `/`);

/**
 * Обновление настроек из удаленного источника
 *
 * @param {Function} cb
 */
const update = async (cb) => {
	let data = {};
	try {
		const res = await fetch(sourceUrl);
		const body = await res.json();
		data = JSON.stringify(cb(body));
		await writeFile(`${dirname}/data.json`, data);
		console.info(packagePrefix + green(`Data was successfully updated!`));
		process.exit(0);
	} catch (err) {
		console.error(packagePrefix + red(`Update error, run "${name} -u"`));
		process.exit(1);
	}
};

module.exports = update;
