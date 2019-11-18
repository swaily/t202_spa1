// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//重要的事情说三遍：在指定位置!!!在指定位置!!!在指定位置!!!~~~添加三行代码
import ElementUI from 'element-ui' //导入ElementUi模块
import 'element-ui/lib/theme-chalk/index.css' //新添加2，避免后期打包样式不同，要放在import App from './App';之前
import App from './App'
import router from './router'

//process.env.MOCK && require('@/mock')

Vue.use(ElementUI)   //使用ElementUi
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
