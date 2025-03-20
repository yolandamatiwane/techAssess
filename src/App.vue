<template>
  <Nav />
  <router-view/>
</template>
<script setup>
import Nav from './components/NavComponent.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav li {
  font-weight: 600;
  color: #2c3e50;
}

nav li.router-link-exact-active {
  color: rgb(76, 6, 15);
}
</style>
