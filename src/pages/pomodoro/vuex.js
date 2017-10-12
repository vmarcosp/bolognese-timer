import localforage from 'localforage';
import TimerMode from '../../models/TimerMode';
const DEFAULT_TIME = '25:00';
const COLLECTION_NAME = 'pomodoro';

const pomodoroMode = new TimerMode(DEFAULT_TIME);
localforage.setItem(COLLECTION_NAME, pomodoroMode);

const state = {
  defaultTime: DEFAULT_TIME
};

const mutations = {};

const module = {
  state,
  mutations
};

export default {
  module
};
