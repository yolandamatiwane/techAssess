import { createStore } from 'vuex'
import axios from 'axios'

const apiUrl = 'https://api.sharenet.co.za/api/v1/px2/spots'

export default createStore({
  state: {
    data:null
  },
  getters: {
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchData({ commit }) {
      const {data} = await axios.get(apiUrl)
        commit('setData', data.spots)
        console.log('On your left')
        console.log(data.spots)
    }
  },
  modules: {
  }
})
