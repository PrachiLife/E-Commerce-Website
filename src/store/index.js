import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: [],
  },
  getters: {
    AllProducts: (state) => {
      return state.product;
    },
  },
  mutations: {
    GET_PRODUCTS: (state, products) => {
      state.product = products;
    },
  },
  actions: {
    getProducts: ({ commit }) => {
      axios
        .get("https://fakestoreapi.com/products?limit=6")
        .then((response) => {
          commit("GET_PRODUCTS", response.data);
        });
    },
  },
  modules: {},
});
