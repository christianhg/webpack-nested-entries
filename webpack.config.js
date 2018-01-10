const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    core: './src/core/index.js',
    add: './src/plugins/add/index.js',
    bar: './src/plugins/bar/index.js',
    foo: './src/plugins/foo/index.js',
    subtract: './src/plugins/subtract/index.js'
  },
  output: {
    filename: '[name].js',
    library: ['[name]'],
    libraryTarget: 'umd',
    umdNamedDefine: true,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // All chunk names have to be listed here. They are ordered a the way
      // that any chunk dependency needs to be listed after the chunk that
      // depends on it. Chunks with many dependencies are in the beginning of
      // the array and chunks with no dependencies are in the end.
      names: ['bar', 'foo', 'add', 'subtract', 'core']
    })
  ],
  resolve: {
    extensions: ['.js']
  }
}
