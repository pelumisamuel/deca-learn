<template>
  <nav class="flex mb-7 w-full justify-between mb- bg-red-800">
    <div>
      <router-link class="logo md:text-xl" style="color: white" to="/"
        >APOCALYPSO</router-link
      >
    </div>
    <div class="flex space-x-5">
      <router-link to="/about">About</router-link>
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
      </div>
      <div v-if="user">
        <router-link class="mr-4" to="/profile">
          Hello, {{ user.name }}</router-link
        >
        <router-link @click="logUserOut" to="/">Log out</router-link>
      </div>

      <!-- <router-link to="/profile">{{user}}</router-link> -->
    </div>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const logUserOut = () => {
      store.dispatch('logout')
    }
    return { logUserOut, user: computed(() => store.state.user) }
  },

  name: 'NavBar',
}
</script>
