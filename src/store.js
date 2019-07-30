import Vue from 'vue'
import Vuex from 'vuex'
import card from '@/store/modules/card'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    card
  }
})
