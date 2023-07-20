const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    port: 3000,
    open: true,
    hot: false,
    liveReload: true
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    // use when line 37 removed
    // assetModuleFilename: (pathData) => {
    //   const filepath = path
    //     .dirname(pathData.filename)
    //     .split("/")
    //     .slice(1)
    //     .join("/");
    //   return `${filepath}/[name][ext][query]`;
    // },
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },{
        test: /\.ejs$/i,
        loader: 'template-ejs-loader',
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
      'tin-tuc-su-kien',
      'san-pham/nguyen-lieu-thuc-pham-my-pham',
      'san-pham/nong-san-nguyen-lieu-tho',
      'san-pham/phu-gia-chan-nuoi',
      'san-pham/premix-vitamin-khoang',
      'san-pham/san-pham-dung-cho-trang-trai',
      'bat-dong-san',
      'tin-tuc/6-buoc-trong-lap-cong-thuc-thuc-an-chan-nuoi'
    ].map(page => {
      return new HtmlWebpackPlugin({
        template: `src/${page}.ejs`,
        filename: `${page}.html`
      })
    }),
    ...[
      'index',
      'about',
      'career',
      'contact',
      'news-events',
      'partner',
      'product',
      'product/nguyen-lieu-thuc-pham-my-pham-en',
      'product/nong-san-nguyen-lieu-tho-en',
      'product/phu-gia-chan-nuoi-en',
      'product/premix-vitamin-khoang-en',
      'product/san-pham-dung-cho-trang-trai-en'
    ].map(page => {
      return new HtmlWebpackPlugin({
        template: `src/en/${page}.ejs`,
        filename: `en/${page}.html`
      })
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' }
      ]
    })
  ],
};