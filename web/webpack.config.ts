import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const mode =
  process?.env.NODE_ENV !== 'production' ? 'development' : 'production';

const ifDev = (obj: any, otherwise = {}) =>
  mode === 'development' ? obj : otherwise;

const config: webpack.Configuration = {
  mode,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: 'assets/[fullhash].js',
    filename: 'assets/[fullhash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  ...ifDev({
    devtool: 'source-map',
  }),

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.json'],

    ...ifDev({
      alias: { 'react-dom': '@hot-loader/react-dom' },
    }),
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'url-loader',
            options: {
              limit: 1536,
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: 'asset',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html', // relative to asset base
      publicPath: '/',
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: process.env.SERVER_PORT || 3030,
    hot: true,
  },
};

module.exports = config;
