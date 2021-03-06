// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import './permission' // 验证
import VueI18n from 'vue-i18n' // 国际化
import './icons'
import {
  Button, Select, Option, Header, Main, Footer, Row,
  Col, Card, Breadcrumb, BreadcrumbItem, Carousel, CarouselItem, Loading, InputNumber,
  Message, Form, FormItem, Input, Dropdown, DropdownMenu, DropdownItem, MessageBox, Radio,
  Dialog, Checkbox, Notification, Menu, MenuItem
} from 'element-ui'

// fade/zoom 等
// import 'element-ui/lib/theme-chalk/base.css'
// collapse 展开折叠
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

// [图片懒加载]https://github.com/hilongjw/vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: 'static/logo.png', // 请求失败后显示的图片
  loading: 'static/loading.gif', // 加载的loading过渡效果
  attempt: 8 // 尝试加载图片数量
})

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zh-cn',    // 语言标识 默认中文
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-cn': require('element-ui/lib/locale/lang/zh-CN'),   // 中文语言包
    'en-us': require('element-ui/lib/locale/lang/en')    // 英文语言包
  }
})
console.log(require('element-ui/lib/locale/lang/zh-CN'))

Vue.config.productionTip = false

// El内置动画 collapse 展开折叠
// Vue.component(CollapseTransition.name, CollapseTransition)

Vue.prototype.$ELEMENT = { size: 'small' } // 用于改变组件的默认尺寸，默认small
Vue.component(Button.name, Button)
// Vue.use(Container)
Vue.use(Select)
Vue.use(Option)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
Vue.use(InputNumber)
Vue.prototype.$message = Message
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.prototype.$msgbox = MessageBox
Vue.use(Radio)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.prototype.$notify = Notification
Vue.use(Menu)
Vue.use(MenuItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})
