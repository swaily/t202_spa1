import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/Main'
import BookList from '@/views/book/BookList'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },{
      path: '/Main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/book/BookList',
          name: 'BookList',
          component: BookList
        },
        {
          path: '/Home',
          name: 'Home',
          component: Home
        }

      ]
    }
  ]
})
