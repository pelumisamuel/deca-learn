<template>
  <div
    class="grid px-14 py-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <div
      v-for="course in courses"
      :key="course.id"
      class="flex flex-col rounded-lg bg-white text-gray-500 shadow-lg mx-2 my-5"
    >
      <img
        class="w-full sm:h-60 object-cover md:object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
        :alt="course.title"
        src="https://picsum.photos/150/150"
      />
      <div class="p-4 flex flex-col justify-between">
        <div class="flex flex-col justify-between">
          <h3 class="text-xl text-gray-900 font-extrabold mb-1">
            {{ course.title }}
          </h3>

          <p class="text-sm h-14 mb-1">
            {{ course.description }}
          </p>
        </div>
        <div>
          <p class="text-sm mb-3">
            <strong>Price: ₦</strong>{{ course.price }}
          </p>
          <Button content="Buy Course"></Button>
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
    const courses = ref([])
    const err = ref(null)
    const loading = ref(false)

    const getCourses = async () => {
      try {
        const response = await axios.get(
          'https://deca-learn.herokuapp.com/courses'
        )
        courses.value = response.data
        console.log(response.data)
      } catch (error) {
        console.log(error)
        // err.value =
        //   error?.response && error?.response.data.error
        //     ? error.response?.data.error
        //     : error.response?.data
      }
    }
    return { getCourses, courses, err }
  },

  created() {
    this.getCourses()
  },
}
</script>
