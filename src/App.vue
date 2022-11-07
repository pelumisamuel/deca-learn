<template>
  <div class="bg-black-leaves">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import axios from 'axios'
import NavBar from './components/navBar.vue'

export default {
  components: { NavBar },
  setup() {
    const store = useStore()
    // const getUserDetails = async () => {
    //   const user = store.state.user
    //   try {
    //     const response = await axios.get(`/users/profile`)
    //     console.log(response)
    //     localStorage.setItem(
    //       'user',
    //       JSON.stringify({
    //         id: response.data.id,
    //         email: response.data.email,
    //         name: response.data.fullName,
    //       })
    //     )
    //     // console.log(localStorage.getItem('token'))
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    const setState = async () => {
      await store.dispatch('setState')
    }
    return { setState }
  },
  // created() {
  //    this.getUserDetails()
  // },
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
