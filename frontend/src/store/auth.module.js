//module d'authentification
import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('groupomaniaUser'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  getters : {
    user: (state) => {
      return state.user
    }
  },
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    signup({ commit }, user) {
      return AuthService.signup(user).then(
        response => {
          commit('signupSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('signupFailure');
          return Promise.reject(error);
        }
      );
    },
    deleteProfile({commit}, payload) {
      return AuthService.delete(payload).then(
        (response) => {
          commit ('deleteSuccess')
          return Promise.resolve(response.data)
        },
        (error) => {
          commit ('deleteFailure')
          return Promise.reject(error)
        }
      )
    },
  },
  mutations: {
    deleteSuccess(state) {
      state.status.loggedIn= false
      state.user = null
    },
    deleteFailure(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    signupSuccess(state) {
      state.status.loggedIn = false;
    },
    signupFailure(state) {
      state.status.loggedIn = false;
    }
  }
};