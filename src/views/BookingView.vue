<template>
    <div >
        <h1> Venues </h1> 
        <select class="form-select" aria-label="Default select example">
            <option selected>All Venues</option>
            <option value="1">Available Venues</option>
            <!-- <option value="2">Available Venues</option> -->
        </select>
        <div class="row justify-content-center">
            <div class="col-md-4" v-for="venue in venues" :key="venue.venue_id">
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">{{ venue.venue_name }}</h5>
                        <p class="card-text">{{ venue.location }}</p>
                        <h4>Workshops</h4>
                        <div class="card mb-2" v-for="workshop in venue.workshops" :key="workshop.workshop_id">
                            <div class="card-body">
                                <h5 class="card-title">{{ workshop.workshop_date }}</h5>
                                <p class="card-text">Seats Available: {{ workshop.seats_available }}</p>
                                <button class="btn btn-dark" @click="showBookingForm(workshop)">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showForm" class="booking-form mx-auto">
            <h2>Book Workshop</h2>
            <form @submit.prevent="submitBooking" >
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="bookingDetails.name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="bookingDetails.email" required>
                
                <label for="seats">Seats:</label>
                <input type="number" id="seats" v-model.number="bookingDetails.seats" min="1" :max="selectedWorkshop.seats_available" required>
                
                <button type="submit" class="btn btn-success">Confirm Booking</button>
                <button type="button" class="btn btn-secondary" @click="showForm = false">Cancel</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showForm: false,
            selectedWorkshop: null,
            bookingDetails: {
                name: '',
                email: '',
                seats: 1
            }
        };
    },
    computed: {
        venues() {
            return this.$store.state.venues || [];
        }
    },
    methods: {
        getVenues() {
            this.$store.dispatch('fetchVenues');
        },
        showBookingForm(workshop) {
            this.selectedWorkshop = workshop;
            this.showForm = true;
        },
        submitBooking() {
            alert(`Booking confirmed for ${this.bookingDetails.name} at ${this.selectedWorkshop.workshop_date}`);
            this.showForm = false;
        }
    },
    mounted() {
        this.getVenues();
    }
};
</script>
<style scoped>
    .booking-form {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
    }
    .card{
        margin: 10px;
        border: none;
    }
</style>