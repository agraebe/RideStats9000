module.exports = {
  entry: './src/client/app.jsx',
  output: {
    path: 'src/dist/',
    publicPath: 'src/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
      },
    ]
  }
};
