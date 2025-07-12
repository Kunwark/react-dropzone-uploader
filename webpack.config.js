const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: './examples/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'examples', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'examples', 'dist'),
    },
  },
}
