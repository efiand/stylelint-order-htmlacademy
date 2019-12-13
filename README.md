# stylelint-order-htmlacademy
[![npm version](https://img.shields.io/npm/v/stylelint-order-htmlacademy.svg)](https://www.npmjs.com/package/stylelint-order-htmlacademy)

Настройки проверки сортировки CSS-свойств с помощью stylelint по [актуальному кодгайду](https://github.com/htmlacademy/codeguide/blob/master/.postcss-sorting.json) HTML Academy.

## Установка

```
npm install --save-dev stylelint-order-htmlacademy
```

## Использование

В конфиг stylelint (например, `.stylelintrc`) внесите:

```
{
  "extends": [
    "stylelint-order-htmlacademy"
  ]
}
```

## Обновление

Запустите из корня проекта:

```
node node_modules/stylelint-order-htmlacademy -u
```

## Благодарности

* [HTML Academy](https://codeguide.academy) – за кодгайд.
