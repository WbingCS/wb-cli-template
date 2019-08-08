const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const babelConfig = require('./babel.base')

const config = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...babelConfig,
              babelrc: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(mp4|jpg|png)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'wb-cli-react'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx','.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    progress: true,
    hot: true,
    port: 3000
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.plugins.push(new CleanWebpackPlugin())
  }
  return config
}
