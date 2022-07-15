<template>
  <div class="login-bg h-screen pt-36 bg-cover">
    <div class="block p-6 rounded-lg shadow-lg mx-auto bg-white max-w-sm">
      <Message
        class="text-center h-10 my-auto"
        v-bind:class="!err && 'invisible'"
        :message="err"
      />
      <p class="text-gray-700 font-bold text-2xl text-center">Login</p>
      <form @submit.prevent="loginSubmit">
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail2"
            class="form-label inline-block mb-2 text-gray-700"
            >Email address:</label
          >
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
            >Password:</label
          >
          <input
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword2"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="flex justify-between items-center mb-6">
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="exampleCheck2"
              >Remember me</label
            >
          </div>
          <router-link
            to="/forgotPassword"
            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >Forgot password?</router-link
          >
        </div>
        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign in
        </button>
        <p class="text-gray-800 mt-6 text-center">
          Not a member?
          <router-link
            to="/register"
            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >Register</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import router from '@/router'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Message from '@/components/Message.vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const err = ref(null)

    const store = useStore()
    const router = useRouter()

    const loginSubmit = async () => {
      try {
        await store.dispatch('logIn', {
          email: email.value,
          password: password.value,
        })
      } catch (error) {
        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data

        setTimeout(() => {
          err.value = null
        }, 3000)
      }
    }

    return { loginSubmit, err, email, password }
  },

  name: 'LoginView',
  components: { Message },
  props: {},
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
