import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    coffees: [],
    neighborhood: "Palermo",
    neighborhoods: [],
    wifi: false,
    coworking: false,
    takeaway: false,
    kitchen: false
  },
  getters: {
    getFilteredCoffes: state =>
      state.coffees.filter(
        coffee =>
          coffee.zone === state.neighborhood &&
          (!state.wifi || coffee.wifi === state.wifi) &&
          (!state.coworking || coffee.coworking === state.coworking) &&
          (!state.kitchen || coffee.kitchen === state.kitchen) &&
          (!state.takeaway || coffee.takeaway === state.takeaway)
      ),
    getCoffeeById: state => id => state.coffees.find(value => value.id === id)
  },
  mutations: {
    // TODO: Usar mayúsculas a la hora de hacer mutaciones
    updateNeighborhood(state, payload) {
      state.neighborhood = payload;
    },
    updateFilter(state, filter) {
      state[filter] = !state[filter];
      // console.log(JSON.stringify(state));
    },
    setCoffees(state, payload) {
      state.coffees = payload;
    },
    setNeighborhoods(state, payload) {
      state.neighborhoods = payload;
    },
    coffeeVisited(state, payload) {
      const updatedCoffees = state.coffees.map(coffee => {
        if (coffee.id === payload) {
          coffee.visited = true;
        }

        return coffee;
      });

      state.coffees = updatedCoffees;
    }
  },
  actions: {
    updateCoffeesVisited({ commit }, payload) {
      commit("coffeeVisited", payload);
    },
    selectNeighborhood({ commit }, payload) {
      commit("updateNeighborhood", payload);
    },
    Filter({ commit }, filter) {
      commit("updateFilter", filter);
    },
    fetchCoffees({ commit }) {
      api
        .getCoffees()
        .then(data => {
          commit("setCoffees", data);
        })
        .catch(e => console.error(e));
    },
    fetchNeighborhoods({ commit }) {
      api
        .getNeighborhoods()
        .then(data => {
          commit("setNeighborhoods", data);
        })
        .catch(e => console.error(e));
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
