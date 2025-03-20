<template>
  <section class="">
    <h4 >Latest Market Trends</h4>
    <div>
      <SpotTable :spotsData="spotsData" />
    </div>
  </section>
</template>

<script>
import SpotTable from '../components/SpotTable.vue';
import axios from 'axios';

export default {
  components: {
    SpotTable,
  },
  data() {
    return {
      spotsData: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://api.sharenet.co.za/api/v1/px2/spots');
        this.spotsData = response.data.spots;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>