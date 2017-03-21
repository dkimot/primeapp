import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import apps from './modules/apps'
import profile from './modules/profile'
import ui from './modules/ui'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    apps,
    profile,
    products,
    ui
  },
  strict: debug
})
