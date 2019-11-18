import Mock from 'mockjs' //引入mockjs，npm已安装
import loginInfo from '@/mock/json/login-mock.js'

Mock.setup({
  // timeout: 400  //延时400s请求到数据
  timeout: 200 - 400 //延时200-400s请求到数据
})

let url = "http://localhost/login";

Mock.mock(url,  /post|get/i,loginInfo)

/* Mock.mock(url, "post", ()=> {
  // 最佳实践，
  debugger;
  return Mock.mock(loginInfo);
}); */
