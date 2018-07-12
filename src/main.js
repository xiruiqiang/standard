import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/public.css';
Vue.use(ElementUI);

import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)

import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

Vue.prototype.$http.get('/static/config/lang.json').then(function(res){
  const i18n = new VueI18n({
    locale: 'CN',    // 语言标识
    messages : res.data
  })

  new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {App}
  })
}, function(){

});


//日期格式化
Vue.prototype.formatDate = function (value) {
  var time = null;
  if(value==null){
    time=new Date();
  }else{
    time=new Date(parseInt(value));
  }
  var year = time.getFullYear();
  var month = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1);
  var date = (time.getDate() < 10 ? '0' + (time.getDate()) : time.getDate())
  var hour = (time.getHours() < 10 ? '0' + (time.getHours()) : time.getHours());
  var minute = (time.getMinutes() < 10 ? '0' + (time.getMinutes()) : time.getMinutes());
  var second = (time.getSeconds() < 10 ? '0' + (time.getSeconds()) : time.getSeconds());
  return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}


