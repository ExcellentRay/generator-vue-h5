'use strict'

import {
  UPDATE_DIRECTION
} from '../types'

export default {
  state: {
    direction: null
  },
  mutations: {
    // 路由过渡
    UPDATE_DIRECTION (state, payload) {
      state.direction= payload
    }
  },
  actions: {
    // 路由过渡
    UPDATE_DIRECTION({commit, dispatch}, payload = null) {
      commit(UPDATE_DIRECTION, payload)
    }
  }
}
