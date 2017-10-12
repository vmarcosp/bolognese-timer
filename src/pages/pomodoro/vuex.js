import localforage from 'localforage';

localforage.setItem('timer', '25:00');

const state = {
  list: []
};

const mutations = {};

const module = {
  state,
  mutations
};

export default {
  module
};
