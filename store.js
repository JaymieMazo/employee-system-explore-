import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        logged_in: 0,
        view: 1,
        G_loading: false
    },
    actions: {},
    mutations: {
        initialData(state, param) {
            state.logged_in = param.logged
        },
        viewData(state, param) {
            state.view = param.view
        },
        setGLoadT(state, param) {
            state.G_loading = param.bool
        },
        setGLoadF(state, param) {
            state.G_loading = param.bool
        }
    },
    getters: {},
    plugins: [createPersistedState()]

});
