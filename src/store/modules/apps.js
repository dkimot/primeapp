const state = {
  all: []
}

const mutations = {
  RECEIVE_APPS (state, apps) {
    state.all = apps
  }
}

export default {
  state,
  mutations
}
