const path = require('path');

module.exports = {
  entry: {
    'PlaceholderHandler': './src/PlaceholderHandler.ts',
    'YouTubePlayer': './src/YouTubePlayer.ts',
    'YouTubeGrid': './src/YouTubeGrid.ts',
    'index': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}; 