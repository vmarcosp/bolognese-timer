import localforage from 'localforage';
import TimerMode from '../../models/TimerMode';

const DEFAULT_TIME = '05:00';
const COLLECTION_NAME = 'shortBreak';
const shortBreakMode = new TimerMode(DEFAULT_TIME);
const state = { defaultTime: DEFAULT_TIME };
const module = { state };

localforage.setItem(COLLECTION_NAME, shortBreakMode);

export default {
  module
};
