import count from './js/count'
import sum from './js/sum'
// 引入 Css 资源，WebPack才会对其打包
import './css/iconfont.css'
import './css/index.css'
// 引入 less 资源
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './styl/index.styl'



console.log(count(6,1))
console.log(sum([1,2,3,4,5,6,7]))

// 判断是否支持HMR功能
if(module.hot) {
  module.hot.accept("./js/count.js", function (count) {
    const result1 = count(2, 1)
    console.log(result1)
  })

  module.hot.accept("./js/sum.js", function (sum) {
    const result2 = sum(1, 2, 3, 4)
    console.log(result2)
  })
}