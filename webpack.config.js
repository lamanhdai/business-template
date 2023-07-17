const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      return `${filepath}/[name][ext][query]`;
    },
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ['html-loader', 'template-ejs-loader'],
      }],
  },
  plugins: [
    ...[
      'index',
      'gioi-thieu',
      'doi-tac-chien-luoc',
      'lien-he',
      'nghe-nghiep',
      'san-pham',
      'tin-tuc-su-kien'
    ].map(page => {
      return new HtmlWebpackPlugin({
        template: `src/${page}.ejs`,
        filename: `${page}.html`
      })
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ],
};