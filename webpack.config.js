module.exports = {
  entry: './browser/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
   module: {
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      }]
    }]
  }
}
