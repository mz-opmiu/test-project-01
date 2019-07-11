const webpack = require('webpack');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    '2019wish': {
      entry: 'src/fok2019wish/main.js',
      template: 'public/fok2019wish/index.html',
      title: '소원이벤트-PC',
      filename: 'fok2019wish/index.html'
    },
    '2019wishM': {
      entry: 'src/fok2019wishM/main.js',
      template: 'public/fok2019wishM/index.html',
      title: '소원이벤트-Mobile',
      filename: 'fok2019wish/index-m.html'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/assets/scss/_global.scss";
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
    ]
  }
};
