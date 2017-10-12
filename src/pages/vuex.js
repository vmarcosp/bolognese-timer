// @ts-check
import { vuex as Pomodoro } from './pomodoro';
const vuex = {
  Pomodoro
};

const keys = Object.keys(vuex);
const modules = keys.reduce((reducer, key) => ({ ...reducer, [key]: vuex[key].module }), {});

export default { modules };
