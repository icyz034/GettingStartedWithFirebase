const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output path
    filename: 'bundle.js'
  }
};
