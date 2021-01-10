import axios from 'axios';

const moduleProducts = {
  state: {
    products: [],
  },
  getters: {
    products: (state) => state.products,
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products;
    },
  },
  actions: {
    initProducts: ({ commit }) => {
      axios.get(
        'https://my-json-server.typicode.com/122Nikita122/products_json/db',
      )
        .then((response) => {
          commit('SET_PRODUCT', response.data.books);
        });
    },
  },
};

export default moduleProducts;
