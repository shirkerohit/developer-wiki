import Vue from 'vue'
import Vuex from 'vuex'

import tools from '../data/toolsLinks.json'
import hosting from '../data/hostingLinks.json'
import resources from '../data/resourcesLinks.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tools, hosting, resources
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
