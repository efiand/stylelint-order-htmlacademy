import update from './update.js';
import { __dirname, getJSON } from './esm.js';

let properties = [];

if (process.argv.indexOf(`-u`) !== -1) {
  update((body) => body[`properties-order`]);
} else {
  getJSON(`${__dirname}/data.json`).then((res) => {
    properties = res;
  });
}

export default {
  plugins: [`stylelint-order`],
  rules: {
    'order/properties-order': [{
      properties
    }]
  }
};
