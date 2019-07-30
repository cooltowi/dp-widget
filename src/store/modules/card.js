import { HTTP } from '@/http-common'

const state = {
  selected: [],
  settings: {
    type: 'big'
  },
  autocomplete: [],
  widgetTypes: [{
    label: 'Standardowy',
    value: 'big',
    type: 'big',
    hide_branding: false,
    opinion: false,
    height: '165px'
  }, {
    label: 'Standardowy z opinią',
    value: 'big_opinion',
    type: 'big',
    hide_branding: true,
    opinion: true,
    height: '289px'
  }, {
    label: 'Standardowy z terminami',
    value: 'big_visit',
    type: 'big_visit',
    hide_branding: false,
    opinion: false,
    height: '383px'
  }, {
    label: 'Z kalendarzem',
    value: 'big_with_calendar',
    type: 'big_with_calendar',
    hide_branding: false,
    opinion: false,
    height: '479px'
  }]
}

const mutations = {
  SET_CARD_AUTOCOMPLETE (state, data) {
    state.autocomplete = data
  },
  SET_CARD_SELECTED (state, data) {
    state.selected = data
  }
}

const getters = {
  getAutocompleteResults: state => state.autocomplete,
  getWidgetTypes: state => state.widgetTypes,
  getSelectedUser: state => state.selected,
  getCardSettings: state => state.settings
}

const actions = {
  GET_CARD_AUTOCOMPLETE_ACTION: ({ commit }, payload) => {
    return HTTP.post(`/indexes/pl_autocomplete_doctor/query`, {
      params: `query=${payload.query}&hitsPerPage=${payload.hits}`
    })
      .then(res => {
        commit('SET_CARD_AUTOCOMPLETE', res.data['hits'])
      })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
