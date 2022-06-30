const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: {
        // index: ['babel-polyfill', './src/scripts/index.js'],
        index:'./src/scripts/index.js',
        "legal-entities": './src/scripts/legal-entities.js',
        payment: './src/scripts/payment.js',
        career: './src/scripts/career.js',
        application: './src/scripts/application.js',
        telephony: './src/scripts/telephony.js',
        contacts: './src/scripts/contacts.js',
        localHost: './src/scripts/localHost.js',
        localGet: './src/scripts/localGet.js',
        
    },
    output: {
      filename: '[name].js',
      clean: true,
    },
    optimization: config = {
      minimize: true,
      minimizer: [new TerserPlugin()],
      },
    module: {
      rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
      ],
    },
  };