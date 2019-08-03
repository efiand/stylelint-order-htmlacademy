'use strict';

// обновление настроек из репозитория кодгайда HTML Academy
if (~process.argv.indexOf('-u')) {
  const fs = require('fs');
  const fetch = require('node-fetch');
  const packageName = 'stylelint-order-htmlacademy';
  
  fetch('https://raw.githubusercontent.com/htmlacademy/codeguide/master/.postcss-sorting.json')
  .then((res) => res.json())
  .then((body) => {
    const data = JSON.stringify(body['properties-order']);
    fs.writeFile('sorting.json', data, () => {
      console.info(packageName + ': properties list successfully updated!');
    });
  })
  .catch(() => {
    console.error(packageName + ': update error, run "stylelint-order-htmlacademy -u"');
  });
}

module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-order': [
      {
        properties: require('./sorting.json')
      }
    ]
  }
};
