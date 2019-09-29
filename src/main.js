import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
<<<<<<< HEAD
import {Grid, GridItem} from 'vant'
//console.log('router--',router)
=======

>>>>>>> 277725795bc75806c7de113f130449b332ae18df

Vue.config.productionTip = false

//引入uant UI
Vue.use(Vant);
Vue.use(Grid);
Vue.use(GridItem)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
