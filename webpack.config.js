const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Ваш основной файл
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.scss$/, // Обработка SCSS файлов
        use: [
          'style-loader', // Вставляет стили в DOM
          'css-loader',   // Интерпретирует @import и url()
          {
            loader: 'sass-loader', // Компилирует Sass в CSS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/, // Обработка CSS файлов
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Укажите ваш HTML-шаблон
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
