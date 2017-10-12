// @ts-check
import { vuex as Pomodoro } from './pomodoro';
import TimerMode from '../models/TimerMode';
import localforage from 'localforage';

const pomodoroMode = new TimerMode('25:00');
localforage.setItem('pomodoro', pomodoroMode);

const vuex = {
  Pomodoro
};

const keys = Object.keys(vuex);
const modules = keys.reduce((reducer, key) => ({ ...reducer, [key]: vuex[key].module }), {});

export default { modules };
