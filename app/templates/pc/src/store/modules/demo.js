'use strict'

import {
  DEMO
} from '../types'

export default {
  state: {
    demo: null
  },
  mutations: {
    // 获取房屋信息
    DEMO (state, payload) {
      state.demo= payload
    }
  },
  actions: {
    // demo
    DEMO({commit, dispatch}, payload = null) {
      commit(DEMO, payload)
    }
  }
}
