const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',   // Your main JS file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',   // The bundled output
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,        // For .js or .jsx files
        exclude: /node_modules/,    // We don't want to transpile node_modules
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // HTML file to use as a template
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']   // So you can import without specifying .js or .jsx
  },
  devServer: {
    port: 3000,       // Development server will run on localhost:3000
    open: true,       // Automatically open the app in the browser
    hot: true         // Enable Hot Module Replacement (HMR) 
  }
};
