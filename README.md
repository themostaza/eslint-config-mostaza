# eslint-config-mostaza

Our eslint shareable config for Node (`base`), React and React-Native (`react`).

### Config install for Node
`npm i -D eslint eslint-config-mostaza-base eslint-plugin-import babel-eslint`  

Update your `.eslintrc`:  
```json
{
  "extends": "eslint-config-mostaza-base",
  "parser": "babel-eslint"
}
```

### Config install for React and React-Native
`npm i -D eslint eslint-config-mostaza-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react babel-eslint`  

Update your `.eslintrc`:  
```json
{
  "extends": "eslint-config-mostaza-react",
  "parser": "babel-eslint"
}
```


