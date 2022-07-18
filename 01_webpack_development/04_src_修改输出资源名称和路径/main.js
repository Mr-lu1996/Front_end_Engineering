import count from './js/count'
import sum from './js/sum'
// 引入 Css 资源，WebPack才会对其打包
import './css/index.css'
// 引入 less 资源
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './styl/index.styl'

console.log(count(6,1))
console.log(sum([1,2,3,4,5,6,7]))