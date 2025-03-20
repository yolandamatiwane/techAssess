/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import router from '../router'

const apiUrl = 'https://technicalassessment-93ha.onrender.com'

// axios.defaults.withCredentials = true

export default createStore({
  state: {
    venues:null,
    bookings:null,
    workshops:null
  },
  getters: {
  },
  mutations: {
    setVenues(state, payload) {
      state.venues = payload
    },
    setBookings(state, payload) {
      state.bookings = payload
    },
    setWorkshops(state, payload) {
      state.workshops = payload
    }
  },
  actions: {
    async fetchVenues({ commit }) {
      try {
        console.log(`${apiUrl}/venues`)
        const {data} = await axios.get(`${apiUrl}/venues`);
        console.log('On your left')
        console.log(data)
        commit('setVenues', data); 
        console.log(data)
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    }
     
  },
  modules: {
  }
})
