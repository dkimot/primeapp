const state = {
  all: [],
  edited: {}
};

const mutations = {
  RECEIVE_PRODUCTS (state, products) {
    state.all = products
  },

  NEW_PRODUCT (state, product) {
    state.edited = product
  }
}

export default {
  state,
  mutations
}
