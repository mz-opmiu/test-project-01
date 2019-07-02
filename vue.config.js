const ansiRegex = require('ansi-regex');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
                @import "@/styles/page/_reset.scss";
                @import "@/styles/vars/_variables.scss";
                @import "@/styles/mixin/_background.scss";
                @import "@/styles/util/_a11y-hidden.scss";
                @import "@/styles/page/_layout.scss";
              `
      }
    }
  },
  transpileDependencies: [ansiRegex]
};
