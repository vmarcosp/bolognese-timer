import Vue from 'vue';
// Css imports
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'mdi/css/materialdesignicons.min.css';
// Relative imports
import App from './App';
import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
