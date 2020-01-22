# custom-assets-webpack-plugin
> Webpack plugin for custom assets files. 

## Install
```js
npm install --save-dev custom-assetes-webpack-plugin
```
```js
yarn add --dev custom-assetes-webpack-plugin
```

## Usage
```js
const CustomAssetsWebpackPlugin = require('custom-assets-webpack-plugin')

module.exports = {
  entry: 'app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.[chunkhash].js'
  },
  plugins: [
    new CustomAssetsWebpackPlugin({
        filename: 'assets.json',
        content: JSON.stringify({
           res: {
               jquery: 'assets/jquery.js'
           }
        })
    })
  ]
}

```

assets.json
```json
{
  "res":{
    "jquery":"https://code.jquery.com/jquery-3.4.1.js"
  }
}
```