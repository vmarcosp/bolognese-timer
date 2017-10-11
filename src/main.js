import Vue from 'vue';
import MuseUI from 'muse-ui';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(MuseUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
