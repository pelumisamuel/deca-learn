<template>
  <div class="login-bg h-screen pt-36 bg-cover">
    <div class="block pt-3 p-8 mx-auto rounded-lg shadow-lg bg-white max-w-md">
      <!-- <Message
        class="text-center h-16 my-auto"
        v-bind:class="!err && 'hidden'"
        :message="err"
      /> -->
      <Message
        class="text-center h-16 my-auto"
        v-bind:class="!err && 'invisible'"
        :message="err"
        :color="messColor === true && 'bg-green-100 text-white'"
      />

      <div class="w-full"></div>
      <p class="text-gray-700 font-bold text-2xl text-center">Add New Course</p>
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
            type="text"
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
import { useRouter } from 'vue-router'
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
    const submit = async () => {
      try {
        if (description.value.length > 150) {
          err.value = 'Description should not be more than 150 characters'

          setTimeout(() => {
            err.value = null
          }, 3000)
          return
        }
        if (title.value.length > 30) {
          err.value = 'title should not be more than 30 characters'
          setTimeout(() => {
            err.value = null
          }, 3000)
          return
        }
        const response = await axios.post('/courses', {
          title: title.value,
          description: description.value,
          price: price.value,
          image: image.value,
        })
        console.log(response.data)
        messColor.value = true
        err.value = 'Course Added successfully'
        title.value = ''
        description.value = ''
        price.value = ''
        image.value = ''

        setTimeout(() => {
          err.value = null
          router.push(`/profile`)
        }, 3000)

        // if (password.value !== passwordII.value) {
        //   err.value = 'passwords do not match'
        //   setTimeout(() => {
        //     err.value = null
        //   }, 3000)
        //   return
        // }
        // await store.dispatch('signUp', {
        //   name: `${firstName.value} ${lastName.value}`,
        //   email: email.value,
        //   password: password.value,
        //   phone: phone.value,
        // })
      } catch (error) {
        //console.log(error)
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
    }
  },
  name: 'addCourseView',
  components: { Message },
  methods: {},
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
