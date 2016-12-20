import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  oauth: {
    name: "Gustavo Américo",
    legend: "Software Engine",
    photo: "http://gustavoamerico.net/Midia/images/profile-avatar.jpg"

  },
  menus: null

}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setMenus: function (state, menus) {
    state.menus = menus;
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  translate: function (key) {
    return $t(key);
  }
}

// getters are functions
const getters = {
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})