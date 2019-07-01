module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/styles/base/_reset-eric.scss";
                @import "@/styles/vars/_variables.scss";
                @import "@/styles/mixin/_background.scss";
                @import "@/styles/util/_a11y-hidden.scss";
                @import "@/styles/page/_layout.scss";
                @import "@/styles/page/_reset.scss";
              `
      }
    }
  },
  transpileDependencies: [ansiRegex]
};
