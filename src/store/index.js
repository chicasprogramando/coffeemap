import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        neighborhood: 'palermo'
    },
    mutations:{
        mutateNeighborhood(state, payload){
            state.neighborhood = payload;
        },
    },
    actions: {
        actionTest({commit}, payload) {
            setTimeout(()=>{
                commit('mutateNeighborhood', payload)
            }, 2000);
        }
    },
});

export default store;