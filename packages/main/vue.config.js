const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "A", // 暴露出去的模块名
        filename: "remoteEntry.js", // 构建出来的文件名
        exposes: {
          "./mountDown.vue": "./src/components/mountDown.vue", // 暴露出去。key，要写相对路径
        },
      }),
    ],
  },
});
