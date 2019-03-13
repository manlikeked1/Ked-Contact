import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import VueTelInput from 'vue-tel-input'
import App from './App';
import router from './router/routes';
import { store } from './store/store';
import 'vuetify/dist/vuetify.min.css'
import 'vue-tel-input/dist/vue-tel-input.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


Vue.config.productionTip = false
// Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueTelInput);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
