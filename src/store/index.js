import Vue from 'vue'
import Vuex from 'vuex'

import tools from '../data/toolsLinks.json'
import hostings from '../data/hostingsLinks.json'
import resources from '../data/resourcesLinks.json'
import courses from '../data/coursesLinks.json'
import documentations from '../data/documentationsLinks.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tools, hostings, resources, courses, documentations
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
