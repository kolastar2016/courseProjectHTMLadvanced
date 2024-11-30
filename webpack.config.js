const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: {
      main: './src/scripts/index.js', 
      styles: './src/styles/main.sass',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'scripts/[name].[contenthash].js',
      assetModuleFilename: 'assets/images/[hash][ext][query]', 
      clean: true,
      publicPath: process.env.NODE_ENV === 'production' ? '/courseProjectHTMLadvanced/' : '/',
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader', 
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
        },
      ],
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isProd ? 'styles/[name].[contenthash].css' : 'styles/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/about.html',
        filename: 'pages/about.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/menu.html',
        filename: 'pages/menu.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/order.html',
        filename: 'pages/order.html',
        inject: 'body',
      }),
      new CopyPlugin({
        patterns: [
          { from: './src/assets', to: 'assets' },
        ],
      }),
    ],
  };
};
