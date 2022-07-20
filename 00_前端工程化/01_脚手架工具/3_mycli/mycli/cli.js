#!/usr/bin/env node
const  path = require('path')
const inquirer = require('inquirer')  // 命令行插件
const ejs = require('ejs')  // 模板语法插件
const fs = require('fs')


// 命令行交互
inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '赶紧，你的项目名称:'
  }
]).then(answers => {
  // 获取模板文件目录
  const tmpDir = path.join(__dirname, 'templates')
  // 获取命令行当前目录
  const destDir = process.cwd()
  // 读取模板目录中的文件，files为tmpDir目录中的文件名
  fs.readdir(tmpDir, (err, files) => {
    if (err) throw err
    // 遍历模板文件目录下所有的文件
    files.forEach(file => {
      ejs.renderFile(path.join(tmpDir, file), answers, (err, result) => {
        if (err) throw err
        fs.writeFileSync(path.join(destDir, file), result)
      })
    })
  })
})