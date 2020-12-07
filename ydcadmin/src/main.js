import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import qs from 'qs'


import MyHeader from "./components/Myheader"
import Myaside from "./components/Myaside"

axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.config.productionTip = false


Vue.use(ElementUI);


Vue.component("my-header",MyHeader);
Vue.component("my-aside",Myaside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
