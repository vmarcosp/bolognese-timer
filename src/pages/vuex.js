import { vuex as Pomodoro } from './pomodoro';
import { vuex as ShortBreak } from './short-break';

const vuex = {
  Pomodoro,
  ShortBreak
};

const keys = Object.keys(vuex);
const modules = keys.reduce((reducer, key) => ({ ...reducer, [key]: vuex[key].module }), {});

export default { modules };
