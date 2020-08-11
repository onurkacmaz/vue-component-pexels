import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'

const axiosInstance = Axios.create({
  baseURL: "https://api.pexels.com",
  headers: {
    'Authorization': '563492ad6f917000010000018249cf373c794aac9159380ea06d3040',
    'Accept': 'application/json',
    'Content-type': 'application/json',
  }
})

Vue.prototype.$http = axiosInstance;
Vue.config.productionTip = false;



new Vue({
  render: h => h(App),
}).$mount('#app')
