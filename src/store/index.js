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
        dummyData: [1, 2, 50, 30, 55, 30, 8, 5, 100]
    },
    mutations:{
        // TODO: Usar mayúsculas a la hora de hacer mutaciones
        mutateNeighborhood(state, payload) {
            state.neighborhood = payload;
        },
        mutateFilter(state,filter) {
            state[filter]=!state[filter];
            // console.log(JSON.stringify(state));
        }
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

/*
var filter = {
    wifi: state.wifi,
    pets: state.coworking
};
users = temp1.filter(function(item) {
    for(var key in filter) {
        if(item[key] === undefined || item[key] != filter[key])
            return false;
    }
    return true;
});

*/