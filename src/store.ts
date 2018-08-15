import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser: (state) => {
      // state.user = 'dk'; //Firebase.auth().currentUser;
    },
  },
  actions: {
    setUser: (context) => {
      context.commit('setUser');
    },
  },
});
