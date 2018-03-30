const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bundleOrder = ['polyfills', 'main'];

module.exports = {
  entry: {
    main: ['./src/index.js'],
    polyfills: ['./src/polyfills.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    chunksSortMode: function(a, b) {
      return bundleOrder.indexOf(a.names[0]) - bundleOrder.indexOf(b.names[0]);
    }
  })],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};