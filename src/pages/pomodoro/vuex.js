import localforage from 'localforage';
import TimerMode from '../../models/TimerMode';

const DEFAULT_TIME = '25:00';
const COLLECTION_NAME = 'pomodoro';
const pomodoroMode = new TimerMode(DEFAULT_TIME);
const state = { defaultTime: DEFAULT_TIME };
const module = { state };

localforage.setItem(COLLECTION_NAME, pomodoroMode);

export default {
  module
};
