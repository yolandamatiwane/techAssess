<template>
    <div class="table-container">
        <div class="spot-table">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>
                            Name 
                            <div class="sort-icons">
                                <i class="fa-solid fa-sort-up" @click="sortByNameAsc"></i>
                                <i class="fa-solid fa-sort-down" @click="sortByNameDesc"></i>
                            </div>
                        </th>
                        <th>
                            Price
                            <div class="sort-icons">
                                <i class="fa-solid fa-sort-up" @click="sortByPriceAsc"></i>
                                <i class="fa-solid fa-sort-down"  @click="sortByPriceDesc"></i>
                            </div>
                        </th>
                        <th>
                            Move
                            <div class="sort-icons">
                                <i class="fa-solid fa-sort-up" @click="sortByMoveAsc"></i>
                                <i class="fa-solid fa-sort-down" @click="sortByMoveDesc"></i>
                            </div>
                        </th>
                        <th>
                            Pmove 
                            <div class="sort-icons">
                                <i class="fa-solid fa-sort-up" @click="sortByPmoveAsc"></i>
                                <i class="fa-solid fa-sort-down" @click="sortByPmoveDesc"></i>
                            </div>
                        </th>
                        <th>
                            Date 
                            <div class="sort-icons">
                                <i class="fa-solid fa-sort-up" @click="sortByDateTimeAsc"></i>
                                <i class="fa-solid fa-sort-down" @click="sortByDateTimeDesc"></i>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="data in sortedData" :key="data.tickerId">
                    <td>{{ data.fullName }}</td>
                    <td>{{ formatDeci(data.price) }}</td>
                    <td>{{ formatDeci(data.move) }}</td>
                    <td>{{ formatDeci(data.pmove) }}</td>
                    <td>{{ data.datetime }}</td>
                </tr>
                </tbody>
            </table>
            </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      spotsData: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        sortedData: [],
      };
    },
    computed: {
      filteredData() {
        const categorized = {};
        const limited = [];
  
        (this.spotsData || []).forEach((item) => {
          if (!categorized[item.categoryName]) {
            categorized[item.categoryName] = [];
          }
          if (categorized[item.categoryName].length < 5) {
            categorized[item.categoryName].push(item);
            limited.push(item);
          }
        });
  
        return limited.sort((a, b) => {
          return a.categoryName.localeCompare(b.categoryName);
        });
      },
    },
    methods: {
      formatDeci(value) {
          return value ? `${parseFloat(value).toFixed(2)}` : "0.00";
      },
      sortByNameAsc() {
          this.sortedData = [...this.filteredData].sort((a, b) => a.fullName.localeCompare(b.fullName));
      },
      sortByNameDesc() {
          this.sortedData = [...this.filteredData].sort((a, b) => b.fullName.localeCompare(a.fullName));
      },
      sortByPriceAsc() {
          this.sortedData = [...this.filteredData].sort((a, b) => a.price - b.price);
      },
      sortByPriceDesc() {
          this.sortedData = [...this.filteredData].sort((a, b) => b.price - a.price);
      },
      sortByMoveAsc() {
          this.sortedData = [...this.filteredData].sort((a, b) => a.move - b.move);
      },
      sortByMoveDesc() {
          this.sortedData = [...this.filteredData].sort((a, b) => b.move - a.move);
      },
      sortByPmoveAsc() {
          this.sortedData = [...this.filteredData].sort((a, b) => a.pmove - b.pmove);
      },
      sortByPmoveDesc() {
          this.sortedData = [...this.filteredData].sort((a, b) => b.pmove - a.pmove);
      },
      sortByDateTimeAsc() {
          this.sortedData = [...this.filteredData].sort((a, b) => {
              const dateA = new Date(a.datetime);
              const dateB = new Date(b.datetime);
              return dateA - dateB;
          });
      },
      sortByDateTimeDesc() {
          this.sortedData = [...this.filteredData].sort((a, b) => {
              const dateA = new Date(a.datetime);
              const dateB = new Date(b.datetime);
              return dateB - dateA;
          });
      },
    },
    mounted() {
      this.$watch(
          () => this.filteredData,
          (newVal) => {
              this.sortedData = newVal;
          }, { immediate: true }
      );
    },
  };
</script>
<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
  height: 600px;
}

.spot-table {
  width: 70%;
  max-width: 100%;
  flex-shrink: 0;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
}

.table th,
.table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
}

tr th {
  position: sticky;
  top: 0;
  z-index: 1;
  /* display: flex; */
  align-items: center; /* Added */
}

.table tbody tr:nth-child(even) {
  background-color: #495057; /* Darker even rows */
}

.table tbody tr:nth-child(odd) {
  background-color: #343a40; /* Dark odd rows */
  color: white;
}

.fa-sort-up {
  cursor: pointer;
  color: rgb(14, 231, 14);
}

.fa-sort-down {
  cursor: pointer;
  color: rgb(231, 14, 14);
}

.sort-icons {
  display: flex;
  flex-direction: column;
}

.table-container::-webkit-scrollbar {
  width: 10px;
}

.table-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.table-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.table-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
