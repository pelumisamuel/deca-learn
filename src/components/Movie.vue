<template>
  <div
    class="grid px-14 py-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  >
    <div
      @click="productPage(movie.id)"
      v-for="movie in movies"
      :key="movie.id"
      class="flex flex-col md:flex-row rounded-lg bg-orange-400 shadow-lg mx-2 my-5"
    >
      <img
        class="w-full sm:h-80 object-center md:h-auto md:object-cover md:w-1/2 rounded-t-lg md:rounded-none md:rounded-l-lg"
        :alt="movie.name"
        :src="movie.image"
      />
      <div class="p-4 flex flex-col justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl font-extrabold mb-1">
            {{ movie.title }}
          </h3>

          <p class="text-sm mb-1"><strong>Genre:</strong> {{ movie.genre }}</p>
          <p class="text-sm mb-1"><strong>Rating:</strong>{{ movie.rating }}</p>
          <p class="text-sm mb-1">
            <strong>Running time:</strong>{{ movie.duration }}
          </p>
        </div>
        <div>
          <p class="text-sm mb-3">
            <strong>starring:</strong> {{ movie.starring }}
          </p>
          <Button content="Buy Ticket"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
// import movies from '../movies'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import { ref } from '@vue/reactivity'
import Message from './Message.vue'
router
export default {
  components: { Button, Message },
  name: 'Movie',
  setup() {
    const movies = ref([])
    const err = ref(null)
    const loading = ref(Boolean)
    const productPage = (id) => {
      router.push(`/${id}`)
    }
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8500/api/movies')
        movies.value = response.data
      } catch (error) {
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data
      }
    }
    return { productPage, getMovies, movies, err }
  },

  created() {
    this.getMovies()
  },
}
</script>
