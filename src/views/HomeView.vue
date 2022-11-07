<template>
  <div class="home px-5 bg-cover h-full text-white">
    <h1 class="text-2xl text-center font-bold">Available courses</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Movie />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Movie from '@/components/Movie.vue'

export default {
  setup() {},
  name: 'HomeView',
  components: {
    HelloWorld,
    Movie,
  },
}
</script>
