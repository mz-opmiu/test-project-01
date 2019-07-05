const webpack = require('webpack');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/styles/_global.scss";
              `
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        jquery: 'jquery/dist/jquery.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].template = 'public/index-m.html';
      return args;
    });
  }
};
