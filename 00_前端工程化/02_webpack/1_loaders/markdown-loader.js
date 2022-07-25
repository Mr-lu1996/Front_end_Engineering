/*
 * @Author: 南山彭于晏
 * @Date: 2022-07-25 20:43:27
 * @LastEditTime: 2022-07-25 21:24:06
 * @FilePath: \Webpack5\00_前端工程化\02_webpack\1_loaders\markdown-loader.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 南山彭于晏, All Rights Reserved. 
 */

const {marked} = require('marked')

module.exports = source => {
  const html = marked(source)
  // const code = `module.exports = ${JSON.stringify(html)}`  // 纯手写 html转 js
  return html
}