import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// PLUGINS
import VuexPersistence from "vuex-persist";
import VuexORM from "@vuex-orm/core";
import database from "@/database";

// vuex-persist instance
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "user_todo_list"
});

export default new Vuex.Store({
  state: {
    selectedUserId: null
    // this could still be implemented by defining an "is_selected" property to the User model
    // but I chose to separate it to demostrate the manual use of the vuex store
  },

  mutations: {
    SET_SELECTED_USER_ID(state, userId) {
      state.selectedUserId = userId;
    }
  },

  actions: {
    SetSelectedUserId({ commit }, userId) {
      commit("SET_SELECTED_USER_ID", userId);
    }
  },

  getters: {
    selectedUserId: state => state.selectedUserId
  },

  modules: {}, // defined by vuex-orm entities { todos, users }

  plugins: [VuexORM.install(database), vuexLocal.plugin]
});
