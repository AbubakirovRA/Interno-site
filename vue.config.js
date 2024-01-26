const path = require("path");

module.exports = {
  transpileDependencies: true,

  chainWebpack: (config) => {
    // Добавление путей для удобства импорта модулей
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", path.resolve(__dirname, "src/components"))
      .set("views", path.resolve(__dirname, "src/views"));
  },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Interno-site/'
    : '/'
};
