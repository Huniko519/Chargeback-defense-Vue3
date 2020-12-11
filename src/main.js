import Vue from 'vue'
import './plugins/vuetify'
import router from './router'
import store from './store/store'

import BootstrapVue from "bootstrap-vue"

import App from './App'

import Default from './Layout/Wrappers/baseLayout.vue';
import Pages from './Layout/Wrappers/pagesLayout.vue';
import Apps from './Layout/Wrappers/appLayout.vue';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component('default-layout', Default);
Vue.component('userpages-layout', Pages);
Vue.component('apps-layout', Apps);

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
