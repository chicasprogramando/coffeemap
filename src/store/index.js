import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    coffees: [],
    neighborhood: "Palermo",
    neighborhoods: [],
    wifi: true,
    coworking: true,
    takeaway: true,
    kitchen: true
  },
  getters: {
    getActiveNeighborhoods: state => {
      let getCoffeesForNeighborhood = neighborhood => state.coffees.filter(coffee => coffee.zone === neighborhood)
      return state.neighborhoods.filter(neighborhood => getCoffeesForNeighborhood(neighborhood.name).length > 0)
    },
    getCurrentNeighborhood: state => {
      return state.neighborhood;
    },
    getNeighborhoods: state => {
      return state.neighborhoods;
    },
    wifiSelected: state => {
      return state.wifi;
    },
    coworkingSelected: state => {
      return state.coworking;
    },
    takeawaySelected: state => {
      return state.takeaway;
    },
    kitchenSelected: state => {
      return state.kitchen;
    },
    getFilteredCoffes: state => {
      return state.coffees.filter(
        coffee =>
          coffee.zone === state.neighborhood &&
          (!state.wifi || coffee.wifi === state.wifi) &&
          (!state.coworking || coffee.coworking === state.coworking) &&
          (!state.kitchen || coffee.kitchen === state.kitchen) &&
          (!state.takeaway || coffee.takeaway === state.takeaway)
      );
    },
    getCoffeeById: state => id => state.coffees.find(value => value.id === id)
  },
  mutations: {
    UPDATE_NEIGHBORHOOD(state, payload) {
      state.neighborhood = payload;
    },
    UPDATE_FILTER(state, filter) {
      state[filter] = !state[filter];
    },
    SET_COFFEES(state, payload) {
      state.coffees = payload;
    },
    SET_NEIGHBORHOOD(state, payload) {
      state.neighborhoods = payload;
    },
    COFFEE_VISITED(state, payload) {
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
      commit("COFFEE_VISITED", payload);
    },
    selectNeighborhood({ commit }, payload) {
      commit("UPDATE_NEIGHBORHOOD", payload);
    },
    updateFilter({ commit }, filter) {
      commit("UPDATE_FILTER", filter);
    },
    fetchCoffees({ commit }) {
      api
        .getCoffees()
        .then(data => {
          commit("SET_COFFEES", data);
        })
        .catch(e => console.error(e));
    },
    fetchNeighborhoods({ commit }) {
      api
        .getNeighborhoods()
        .then(data => {
          commit("SET_NEIGHBORHOOD", data);
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
