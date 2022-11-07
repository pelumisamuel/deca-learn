<template>
  <div class="login-bg h-screen pt-36 bg-cover">
    <div class="block pt-3 p-8 mx-auto rounded-lg shadow-lg bg-white max-w-md">
      <Message
        class="text-center h-16 my-auto"
        v-bind:class="!err && 'invisible'"
        :message="err"
        :color="messColor === true && 'bg-green-100 text-white'"
      />

      <div class="w-full"></div>
      <p class="text-gray-700 font-bold text-2xl text-center">EditCourse</p>
      <form @submit.prevent="submit" class="my-2">
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Course Title"
            v-model="title"
            required
          />
        </div>
        <div class="form-group mb-6">
          <textarea
            type="textarea"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="course Description"
            v-model="description"
            required
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="number"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Price"
            v-model="price"
            required
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput1"
            placeholder="Image Url"
            v-model="image"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message.vue'
//import { title } from 'process'
import { ref } from 'vue'
//import router from '@/router'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

export default {
  setup() {
    const title = ref('')
    const description = ref('')
    const price = ref('')
    const image = ref('')
    const err = ref(null)
    const messColor = ref(false)
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const fetchDetails = () => {
      //const response = await axios.get(`/courses/${id}`)
      const book = JSON.parse(localStorage.getItem('editCourse'))
      //console.log(book)
      title.value = book.title
      description.value = book.description
      price.value = parseInt(book.price.split(',').join(''))
    }

    const submit = async () => {
      try {
        const id = route.params.id
        const response = await axios.put(`/courses/${id}`, {
          title: title.value,
          description: description.value,
          price: price.value,
          image: image.value,
        })
        console.log(response.data)
        messColor.value = true
        err.value = 'Course Updated successfully'

        localStorage.removeItem('editCourse')
        // title.value = ''
        // description.value = ''
        // price.value = ''
        // image.value = ''
        setTimeout(() => {
          err.value = null
          router.push(`/profile`)
        }, 3000)
      } catch (error) {
        // console.log(error)
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error.message
            : error.response.data.message
        setTimeout(() => {
          err.value = null
        }, 5000)
      }
    }
    return {
      submit,
      err,
      title,
      price,
      description,
      image,
      messColor,
      fetchDetails,
    }
  },
  name: 'editCourseView',
  components: { Message },
  methods: {},
  mounted() {
    this.fetchDetails()
  },
}
</script>

<style scoped>
.login-bg {
  background-image: linear-gradient(
      rgba(22, 42, 70, 0.65),
      rgba(22, 42, 70, 0.65)
    ),
    url('https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740');
}
</style>
