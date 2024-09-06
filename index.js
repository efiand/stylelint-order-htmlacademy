import update from './update.js';
import properties from './properties.js';

if (process.argv.indexOf(`-u`) !== -1) {
  update((body) => body[`properties-order`]);
}

export default {
  plugins: [`stylelint-order`],
  rules: {
    'order/properties-order': [{ properties }]
  }
};
