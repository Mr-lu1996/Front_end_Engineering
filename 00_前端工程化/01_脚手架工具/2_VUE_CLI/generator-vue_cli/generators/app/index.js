/*
 * @Author: 南山彭于晏
 * @Date: 2022-07-19 21:01:25
 * @LastEditTime: 2022-07-19 21:30:02
 * @FilePath: \Webpack5\00_前端工程化\01_脚手架工具\2_VUE_CLI\generator-vue_cli\generators\app\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 南山彭于晏, All Rights Reserved. 
 */
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  // 命令行交互
  prompting() {
    // promise
    return this.prompt([
      {
        type:'input',
        name: 'title',
        message: '你的项目名称：',
        default: this.appname
      }
    ]).then(answers => {
      this.titleName = answers
    })
  }

  // writing方法默认被执行
  writing () {  
    // 将所有模板文件写入数组中
    const templates = [
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
      '.gitignore',
      'babel.config.js',
      'jsconfig.json',
      'package-lock.json',
      'package.json',
      'README.md',
      'vue.config.js'
    ]

    // 循环创建模板中的文件
    templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),  // from
        this.destinationPath(item),  // to
        this.titleName  // context
      )
    })

    // 参照模板templates中的index.html文件生成项目中的 index.html文件
    // const tmpl = this.templatePath('index.html')
    // const output = this.destinationPath('index.html')
    // const context = this.titleName
    // this.fs.copyTpl(tmpl, output, context)
  }
}

