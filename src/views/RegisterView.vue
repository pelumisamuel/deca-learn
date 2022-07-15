<template>
  <div
    class="login-bg h-screen pt-36 bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1527843812948-a8c2ddd2fb68?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740');
    "
  >
    <div class="block pt-3 p-8 mx-auto rounded-lg shadow-lg bg-white max-w-md">
      <Message
        class="text-center h-16 my-auto"
        v-bind:class="!err && 'invisible'"
        :message="err"
      />
      <div class="w-full"></div>
      <p class="text-gray-700 font-bold text-2xl text-center">Register</p>
      <form @submit.prevent="registerSubmit" class="my-2">
        <div class="grid grid-cols-2 gap-4">
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="first-name"
              v-model="firstName"
              aria-describedby="emailHelp123"
              placeholder="First name"
              required
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Last name"
              v-model="lastName"
              required
            />
          </div>
        </div>
        <div class="form-group mb-6">
          <input
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput125"
            placeholder="Email address"
            v-model="email"
            required
          />
        </div>
        <div class="form-group mb-6">
          <input
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput126"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Register
        </button>
        <p class="text-gray-800 mt-6 text-center">
          Already a member?
          <router-link
            to="/login"
            class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >Log in</router-link
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import Message from '@/components/Message.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const email = ref('')
    const password = ref('')
    const err = ref(null)

    const store = useStore()
    const router = useRouter()

    const registerSubmit = async () => {
      try {
        await store.dispatch('signUp', {
          name: `${firstName.value} ${lastName.value}`,
          email: email.value,
          password: password.value,
        })
      } catch (error) {
        console.log(error)

        err.value =
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data

        setTimeout(() => {
          err.value = null
        }, 5000)
      }
    }

    return {
      registerSubmit,
      err,
      email,
      password,
      lastName,
      firstName,
    }
  },
  name: 'registerView',
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
