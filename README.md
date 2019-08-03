# stylelint-order-htmlacademy

Настройки проверки сортировки CSS-свойств с помощью stylelint по [актуальному кодгайду](https://github.com/htmlacademy/codeguide/blob/master/.postcss-sorting.json) HTML Academy.

## Установка

```bash
npm install --save-dev stylelint-order-htmlacademy
```

## Использование

В конфиг stylelint (например, `.stylelintrc`) внесите изменения:


```json
{
  "extends": "stylelint-order-htmlacademy",
  ...
}
```

Или:


```json
{
  "extends": [
    ...
    "stylelint-order-htmlacademy"
  ],
  ...
}
```

## Благодарности

* [HTML Academy](https://codeguide.academy) – за кодгайд.
