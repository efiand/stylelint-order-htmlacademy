import { promises } from 'fs';
import { URL } from 'url';

const getJSON = async (path) => {
	const res = await promises.readFile(path, 'utf8');
	return await JSON.parse(res);
};

const createPath = (path) => new URL(path, import.meta.url).pathname
	.replace(/\\/g, `/`)
	.replace(/^\/\w{1}\:/, ``);

const __filename = createPath('');

const __dirname = createPath('.').slice(0, -1);

export { promises as fs, getJSON, __filename, __dirname, createPath };
export default { fs: promises, getJSON, __filename, __dirname, createPath };
