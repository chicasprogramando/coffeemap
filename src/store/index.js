import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        neighborhood: 'palermo',
        wifi:false,
        coworking:false,
        takeaway:false,
        cocina: false,
    },
    mutations:{
        mutateNeighborhood(state, payload){
            state.neighborhood = payload;
        },
        mutateWifi(state){
            state.wifi=!state.wifi;
        },
        mutateCoworking(state){
            state.coworking=!state.coworking;
        },
        mutateTakeAway(state){
            state.takeaway=!state.takeaway;
        },
        mutateCocina(state){
            state.cocina=!state.cocina;
        }
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