import Vue from 'vue';
import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import 'mdi/css/materialdesignicons.min.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
