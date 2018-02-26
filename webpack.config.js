module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-react']
        }
      }
    }]
  }
};
