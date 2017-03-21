import api from '../api/fixtures.js'

export const getProfile = ({ commit }, profile) => {
  api.getProfile(profile => {
    commit('RECEIVE_PROFILE', profile);
  })
}

export const getApps = ({ commit }, key) => {
  api.getApps(apps => {
    commit('RECEIVE_APPS', apps);
  });
}

export const getProducts = ({ commit }) => {
  api.getProducts(products => {
    commit('RECEIVE_PRODUCTS', products);
  });
}

export const newProduct = ({ commit }, product) => {
  console.log(product);
  api.newProduct(product => {
    commit('NEW_PRODUCT', product);
  });
}

export const submitProduct = ({ commit }, product) => {
  console.log(product);
  api.submitProduct(product, (result) => {
    commit('PRODUCT_ADDED', result);
  })
}
