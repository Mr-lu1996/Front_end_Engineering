/*
 * @Author: 南山彭于晏
 * @Date: 2022-07-20 22:52:36
 * @LastEditTime: 2022-07-25 21:22:18
 * @FilePath: \Webpack5\00_前端工程化\02_webpack\1_loaders\webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 南山彭于晏, All Rights Reserved. 
 */
/*
 * @Author: 南山彭于晏
 * @Date: 2022-07-20 22:52:36
 * @LastEditTime: 2022-07-25 20:44:35
 * @FilePath: \Webpack5\00_前端工程化\02_webpack\1_loaders\webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 南山彭于晏, All Rights Reserved. 
 */
const path = require('path')
module.exports = {
  mode: "none",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['html-loader','./markdown-loader']
      }
    ]
  }
}