const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "B", // 暴露出去的模块名
        filename: "remoteEntry.js", // 构建出来的文件名
        remotes: {
          A: "A@http://localhost:8081/remoteEntry.js", // 引用
        },
      }),
    ],
  },
});
