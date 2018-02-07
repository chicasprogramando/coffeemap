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
        mutateFilter(state,filter){
            state[filter]=!state[filter];
            console.log(JSON.stringify(state));
        },
        
    },
    actions: {
        actionTest({commit}, payload) {
            setTimeout(()=>{
                commit('mutateNeighborhood', payload)
            }, 2000);
        },
        Filter({commit}, filter) {
            commit('mutateFilter',filter);
        }

     }    
    });

export default store;