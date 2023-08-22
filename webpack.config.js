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
  resolve: {
    alias: {
      '/assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: `/`,
    // enable
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split("/")
        .slice(1)
        .join("/");
      const timeStamp = new Date().getTime();
      return `${filepath}/[name][ext]?v=${timeStamp}`;
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: 'html-loader'
      },
      {
        test: /\.ejs$/i,
        loader: 'html-loader',
        options: {
          // sources: false,
          sources: {
            list: [
              {
                attribute: "content",
                type: "src",
                filter: (tag, attribute, attributes, resourcePath) => {
                  return tag.toLowerCase() !== "meta" && tag.toLowerCase() !== "img";
                },
              },
              {
                attribute: "src",
                type: "src",
                filter: (tag, attribute, attributes, resourcePath) => {
                  return tag.toLowerCase() !== "meta";
                },
              }
            ],
          },
        },
      }, {
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
      'tin-tuc/6-buoc-trong-lap-cong-thuc-thuc-an-chan-nuoi',
      'tin-tuc/co-the-cat-giam-hoac-thay-the-vitamin-e-trong-thuc-an-chan-nuoi',
      'tin-tuc/dieu-chinh-che-do-dinh-duong-cho-heo-nai',
      'tin-tuc/kiem-soat-gia-tri-dem-trong-thuc-an-heo-con',
      'tin-tuc/kiem-soat-chat-luong-thuc-an-chan-nuoi',
      'bds/minh-anh-park-hill-cu-chi',
      'thanh-toan'
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
      'product/san-pham-dung-cho-trang-trai-en',
      'project',
      'news/6-buoc-trong-lap-cong-thuc-thuc-an-chan-nuoi-en',
      'news/co-the-cat-giam-hoac-thay-the-vitamin-e-trong-thuc-an-chan-nuoi-en',
      'news/dieu-chinh-che-do-dinh-duong-cho-heo-nai-en',
      'news/kiem-soat-chat-luong-thuc-an-chan-nuoi-en',
      'news/kiem-soat-gia-tri-dem-trong-thuc-an-heo-con-en',
      'projectdetail/minh-anh-park-hill-cu-chi-en',
      'payment'
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