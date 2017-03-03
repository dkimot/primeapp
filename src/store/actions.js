import api from '../api/fixtures.js'

export const getProfile = ({ commit }, profile) => {
  api.getProfile(profile => {
    commit('RECEIVE_PROFILE', profile)
  })
}

export const getApps = ({ commit }, key) => {
  api.getApps(apps => {
    commit('RECEIVE_APPS', apps)
  })
}
