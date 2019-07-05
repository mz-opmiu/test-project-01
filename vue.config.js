const path = require('path');
const webpack = require('webpack');
// const ansiRegex = require('ansi-regex');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/styles/vars/_variables.scss";
                @import "@/styles/mixin/_background.scss";
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
  }
  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store;
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         resources: '@/styles/_global.scss'

  //         // Or array of paths
  //         // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
  //       })
  //       .end();
  //   });
  // }
  // transpileDependencies: [ansiRegex]
};
