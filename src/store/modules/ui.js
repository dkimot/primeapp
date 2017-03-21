const state = {
  all: [],
  dropdowns: {}
}

const mutations = {
  DROPDOWN (state, id) {
    state.dropdowns[id] = !state.dropdowns[id];
  }

}

export default {
  state,
  mutations
}
