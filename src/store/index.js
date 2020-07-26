import Vue from 'vue'
import Vuex from 'vuex'

import tools from '../data/toolsLinks.json'
import hosting from '../data/hostingLinks.json'
import resources from '../data/resourcesLinks.json'
import courses from '../data/coursesLinks.json'
import documentation from '../data/documentationLinks.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tools, hosting, resources, courses, documentation
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
