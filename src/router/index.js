import Vue from 'vue';
import Router from 'vue-router';
import { Pomodoro } from '@/pages/pomodoro';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Pomodoro',
    component: Pomodoro
  }]
});
