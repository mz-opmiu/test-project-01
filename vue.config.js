const webpack = require('webpack');

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      title: 'Index Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    fok2019wish: {
      entry: 'src/fok2019wish/main.js',
      template: 'public/fok2019wish/index.html',
      title: '소원이벤트',
      filename: 'fok2019wish/index.html'
    }
  },
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
  }
  // chainWebpack: config => {
  //   config.plugin('html').tap(args => {
  //     args[0].template = 'public/index-m.html';
  //     return args;
  //   });
  // }
};
