module.exports = {
  outputDir: "dist",
  css: {
    extract: false,
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add("/src")
      .end()
      .use("babel")
      .loader("babel-loader");
    config.performance
      .set("maxEntrypointSize", 2500000)
      .set("maxAssetSize", 2000000);
  },
};
