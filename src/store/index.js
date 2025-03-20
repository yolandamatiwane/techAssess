/* eslint-disable */
import { createStore } from 'vuex';
import axios from 'axios';
import router from '../router';

const apiUrl = 'https://technicalassessment-93ha.onrender.com';

export default createStore({
    state: {
        venues: null,
        bookings: null,
        workshops: null,
    },
    getters: {},
    mutations: {
        setVenues(state, payload) {
            state.venues = payload;
        },
        setBookings(state, payload) {
            state.bookings = payload;
        },
        setWorkshops(state, payload) {
            state.workshops = payload;
        },
        addBooking(state, payload){
          if(state.bookings){
            state.bookings.push(payload)
          } else {
            state.bookings = [payload];
          }
        }
    },
    actions: {
        async fetchVenues({ commit }) {
            try {
                console.log(`${apiUrl}/venues`);
                const { data } = await axios.get(`${apiUrl}/venues`);
                console.log('Fetched Venues:', data);
                commit('setVenues', data);
            } catch (error) {
                console.error("Error fetching venues:", error);
            }
        },
        async fetchBookings({ commit }) {
            try {
                console.log(`${apiUrl}/booking`);
                const { data } = await axios.get(`${apiUrl}/booking`);
                console.log('Fetched Bookings:', data);
                commit('setBookings', data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        },
        async createBooking({ commit }, bookingData) {
            try {
                console.log(`${apiUrl}/booking/create`);
                const { data } = await axios.post(`${apiUrl}/booking/create`, bookingData);
                console.log('Booking created:', data);
                commit('addBooking', data);
            } catch (error) {
                console.error('Error creating booking:', error);
                throw error;
            }
        },
        async fetchWorkshops({ commit }) {
            try {
                console.log(`${apiUrl}/workshops`);
                const { data } = await axios.get(`${apiUrl}/workshops`);
                console.log('Fetched workshops:', data);
                commit('setWorkshops', data);
            } catch (error) {
                console.error('Error fetching workshops:', error);
            }
        },
    },
    modules: {},
});