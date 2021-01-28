import Vue from 'vue'
import App from './App.vue'
import '@/plugins/axios'
import router from '@/plugins/router'
import '@/plugins/store'
import * as Global from '@/plugins/util/global'
import vuetify from './plugins/vuetify';

Object.keys(Global).forEach(k => {
    Vue.use(Global[k])
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
