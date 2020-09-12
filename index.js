'use strict';

if (process.argv.indexOf(`-u`) !== -1) {
  require(`./update`)((body) => body[`properties-order`]);
}

module.exports = {
  plugins: [`stylelint-order`],
  rules: {
    'order/properties-order': [{
      properties: require(`./data.json`)
    }]
  }
};
