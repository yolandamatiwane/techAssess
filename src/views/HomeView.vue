<template>
  <div class="home">

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">
            Full Name 
            <i class="fa-solid fa-arrow-up" @click="sortByNameAsc"></i>
            <i class="fa-solid fa-arrow-down" @click="sortByNameDesc"></i>
          </th>
          <th scope="col">
            Price
            <i class="fa-solid fa-arrow-up" @click="sortByPriceAsc"></i>
            <i class="fa-solid fa-arrow-down" @click="sortByPriceDesc"></i>
          </th>
          <th scope="col">
            Move
            <i class="fa-solid fa-arrow-up" @click="sortByMoveAsc"></i>
            <i class="fa-solid fa-arrow-down" @click="sortByMoveDesc"></i>
          </th>
          <th scope="col">
            Pmove
            <i class="fa-solid fa-arrow-up" @click="sortByPmoveAsc"></i>
            <i class="fa-solid fa-arrow-down " @click="sortByPmoveDesc"></i>
          </th>
          <th scope="col">
            Date & Time
            <i class="fa-solid fa-arrow-up" @click="sortByDateTimeAsc"></i>
            <i class="fa-solid fa-arrow-down" @click="sortByDateTimeDesc"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in sortedData" :key="data.tickerId">
          <td>{{ data.categoryName }}</td>
          <td>{{ data.fullName }}</td>
          <td>{{ formatDeci(data.price) }}</td>
          <td>{{ formatDeci(data.move) }}</td>
          <td>{{ formatDeci(data.pmove) }}</td>
          <td>{{ data.datetime }}</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      sortedData: []
    };
  },
  computed:{
    filteredData() {
      const categorized = {}; //object for categorized 
      const limited = [];

      (this.$store.state.data || []).forEach((item) => {
        if (!categorized[item.categoryName]) {
          categorized[item.categoryName] = [];
        }
        // limits length to 5
        if (categorized[item.categoryName].length < 5) {
          categorized[item.categoryName].push(item);
          limited.push(item);
        }
      });

      return limited.sort((a,b)=>{
        return a.categoryName.localeCompare(b.categoryName)
      })
    }
  },
  methods:{
    getdata(){
      this.$store.dispatch('fetchData')
    },
    sortByNameAsc() {
      this.sortedData = [...this.filteredData].sort((a, b) => a.fullName.localeCompare(b.fullName));
      console.log(this.sortedData)
    },
    sortByNameDesc() {
      this.sortedData = [...this.filteredData].sort((a, b) => b.fullName.localeCompare(a.fullName));
      console.log(this.sortedData)
    },
    sortByPriceAsc() {
      this.sortedData = [...this.filteredData].sort((a, b) => a.price - b.price);
      console.log(this.sortedData)
    },
    sortByPriceDesc() {
      this.sortedData = [...this.filteredData].sort((a, b) => b.price - a.price);
      console.log(this.sortedData)
    },
    // Move sorting
    sortByMoveAsc() {
      this.sortedData = [...this.filteredData].sort((a, b) => a.move - b.move);
      console.log(this.sortedData);
    },
    sortByMoveDesc() {
      this.sortedData = [...this.filteredData].sort((a, b) => b.move - a.move);
      console.log(this.sortedData);
    },

    // Pmove sorting
    sortByPmoveAsc() {
      this.sortedData = [...this.filteredData].sort((a, b) => a.pmove - b.pmove);
      console.log(this.sortedData);
    },
    sortByPmoveDesc() {
      this.sortedData = [...this.filteredData].sort((a, b) => b.pmove - a.pmove);
      console.log(this.sortedData);
    },

    // Time sorting
    
    sortByDateTimeAsc() {
      this.sortedData = [...this.filteredData].sort((a, b) => {
        const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);
        return dateA - dateB;
      });
      console.log(this.sortedData);
    },

    sortByDateTimeDesc() {
      this.sortedData = [...this.filteredData].sort((a, b) => {
        const dateA = new Date(a.datetime);
        const dateB = new Date(b.datetime);
        return dateB - dateA;
      });
      console.log(this.sortedData);
    },

    formatDeci(value) {
      return value ? `${parseFloat(value).toFixed(2)}` : "0.00";
    }
  },
  mounted() {
    this.getdata()
    this.$watch(
      ()=> this.filteredData,
      (newVal)=>{
        this.sortedData = newVal;
      },{immediate:true}
    )
}
}
</script>
<style scoped>
  .fa-arrow-up{
    color: green;
  }
  .fa-arrow-down{
    color: red;
  }
</style>