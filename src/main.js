import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'


Vue.config.productionTip = false

//引入uant UI
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
