import localforage from 'localforage';
import TimerMode from '../../models/TimerMode';

const DEFAULT_TIME = '30:00';
const COLLECTION_NAME = 'longBreak';

const longBreakMode = new TimerMode(DEFAULT_TIME);
localforage.setItem(COLLECTION_NAME, longBreakMode);

const state = {
  defaultTime: DEFAULT_TIME
};

const module = {
  state
};

export default {
  module
};
