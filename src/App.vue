<template>
  <div class="bg-black-leaves">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/navBar.vue'

export default {
  components: { NavBar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
}

nav {
  padding: 20px;
}

.logo {
  font-weight: bolder;
  font-size: large;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
