import Vue from 'vue';
import Router from 'vue-router';
import { Pomodoro } from '@/pages/pomodoro';
import { ShortBreak } from '@/pages/short-break';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pomodoro',
      component: Pomodoro
    },
    {
      path: '/short-break',
      name: 'ShortBreak',
      component: ShortBreak
    }
  ]
});
