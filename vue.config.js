module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
                @import "@/styles/base/_reset-eric.scss";
                @import "@/styles/vars/_variables.scss";
                @import "@/styles/page/_layout.scss";
              `
      }
    }
  }
};
