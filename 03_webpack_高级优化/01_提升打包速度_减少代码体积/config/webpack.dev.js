// Node.js的核心模块，专门用来处理文件路径
const path = require('path')
const ESLintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  
  // 输出
  output: {
    // path:文件输出目录，必须是绝对路径
    path: undefined, // 开发模式没有输出，不需要指定输出目录
    // filename: 输出文件名
    // filename: "main.js"
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    // clean: true, // 开发模式没有输出，不需要清空输出结果
  },
  
  // 加载器
  module: {
    rules: [
      {
        oneOf: [
          {
            // 用来匹配 .css 结尾的文件
            test: /\.css$/,
            // use 数组里面 Loader 执行顺序是从右到左
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.less$/,
            use: ["style-loader", "css-loader", "less-loader"],
          },
          {
            test: /\.s[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.styl$/,
            use: ["style-loader", "css-loader", "stylus-loader"]
          },
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024  // 小于10kb的图片会被base64处理
              }
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash: 8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: "static/imgs/[hash:8][ext][query]",
            }
          },
          {
            test: /\.(ttf|woff2?|map4|map3|avi)$/,
            type: "asset/resource",
            generator: {
              filename: "static/media/[hash:8][ext][query]"
            }
          },
          {
            test: /\.js$/,
            // exclude: /node_modules/,  // 排除node_modules代码不编译
            include: path.resolve(__dirname, "../src"),  // 编译src文件夹下的.js文件
            loader: "babel-loader",
            options: {
              cacheDirectory: true, // 开启babel编译缓存
              cacheCompression: false, // 缓存文件不要压缩
            }
          }
        ]
      },
      
    ]
  },

  // 插件
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules", //默认值
      cache: true, // 开启缓存
      // 缓存目录
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/.eslintcache"
      ),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新html文件有两个特点：1.内容和源文件一致 2.自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html")
    })
  ],

  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "3000", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true, // 开启HMR功能(只能用于开发环境，生产环境不需要了)
  },

  // 模式：
  mode: "development",
  devtool: "cheap-module-source-map"
}