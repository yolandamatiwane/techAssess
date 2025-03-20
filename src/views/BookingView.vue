<template>
  <div class="venues-page">
    <div class="container mt-4">
      <h2 class="page-title">Venues</h2>
      <select
        v-model="filterOption"
        class="form-select mb-4"
        aria-label="Filter venues"
      >
        <option value="all">All Venues</option>
        <option value="available">Available Venues</option>
      </select>
      <div class="row justify-content-center">
        <div
          class="col-md-3 col-sm-6 mb-4"
          v-for="venue in filteredVenues"
          :key="venue.venue_id"
        >
          <div class="venue-card">
            <h4 class="venue-title">{{ venue.venue_name }}</h4>
            <h5 class="venue-location">{{ venue.location }}</h5>
            <h6 class="workshops-title">Workshops</h6>
            <div
              class="workshop-card mb-2"
              v-for="workshop in venue.workshops"
              :key="workshop.workshop_id"
            >
              <h6 class="workshop-date">
                {{ formattedDate(workshop.workshop_date) }}
              </h6>
              <p v-if="workshop.seats_available > 0" class="seats-available">
                Seats Available: {{ workshop.seats_available }}
              </p>
              <p v-else class="sold-out">Sold Out</p>
              <button
                v-if="workshop.seats_available > 0"
                class="book-btn"
                @click="showBookingForm(workshop)"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showForm" class="booking-form mx-auto">
        <h2 class="booking-title">Book Workshop</h2>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="bookingDetails.name"
              required
            />
          </div>
          <button @click.prevent="submitBooking()" class="confirm-btn">
            Confirm Booking
          </button>
          <button @click.prevent="showForm = false" class="cancel-btn">
            Cancel
          </button>
        </form>
      </div>
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
        name: "",
      },
      filterOption: "all",
    };
  },
  computed: {
    venues() {
      return this.$store.state.venues || [];
    },
    filteredVenues() {
      if (this.filterOption === "available") {
        return this.venues
          .filter((venue) =>
            venue.workshops.some((workshop) => workshop.seats_available > 0)
          )
          .map((venue) => ({
            ...venue,
            workshops: venue.workshops.filter(
              (workshop) => workshop.seats_available > 0
            ),
          }));
      }
      return this.venues;
    },
  },
  methods: {
    getVenues() {
      this.$store.dispatch("fetchVenues");
    },
    showBookingForm(workshop) {
      this.selectedWorkshop = workshop;
      this.showForm = true;
    },
    submitBooking() {
      const bookingData = {
        workshop_id: this.selectedWorkshop.workshop_id,
        name: this.bookingDetails.name,
      };

      this.$store
        .dispatch("createBooking", bookingData)
        .then(() => {
          alert(
            `Booking confirmed for ${this.bookingDetails.name} at ${this.selectedWorkshop.workshop_date}`
          );
          this.showForm = false;
          this.bookingDetails.name = "";
        })
        .catch((error) => {
          console.error("Failed to create booking:", error);
          alert("Failed to create booking. Please try again.");
        });
    },
    formattedDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toISOString().split("T")[0];
    },
  },
  mounted() {
    this.getVenues();
  },
};
</script>

<style scoped>
.venues-page {
  /* color: #e0e0e0; */
  padding-bottom: 30px;
}

.workshops-title {
  color: #fe3552;
}

.venue-location {
  color: #1A3A60;
}

.booking-title,
h5.venue-title,
.workshop-date {
  color: #1a3a60;
}

.venue-card,
.workshop-card {
  background-color: #e4edfa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.venue-card {
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.row {
  padding-top: 55px;
  /* background-color: #888; */
}
.venue-card::-webkit-scrollbar {
  width: 8px;
}

.venue-card::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.venue-card::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.workshops-scroll {
  flex-grow: 1;
}

.workshops-scroll::-webkit-scrollbar {
  width: 8px;
}

.workshops-scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.workshops-scroll::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.venue-location,
.seats-available,
.sold-out {
  color: #bdbdbd;
}

.sold-out {
  color: red;
  font-weight: bold;
}

.book-btn,
.confirm-btn,
.cancel-btn {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-btn:hover,
.confirm-btn:hover {
  background-color: #cc0000;
}

.cancel-btn {
  background-color: #555;
  margin-left: 10px;
}

.cancel-btn:hover {
  background-color: #333;
}

.booking-form {
  background: #2c2c2c;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  width: 80%;
  max-width: 500px;
}
</style>
