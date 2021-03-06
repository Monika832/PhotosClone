import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
axios.defaults.baseURL = 'https://photosclonebymonika.herokuapp.com';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
