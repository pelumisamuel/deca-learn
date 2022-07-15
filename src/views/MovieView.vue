<template>
  <section class="body-font overflow-hidden text-white">
    <header>
      <img :src="movie.banner" :alt="movie.title" />
    </header>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex justify-around flex-wrap">
        <img
          :alt="movie.title"
          class="object-cover object-center rounded border border-gray-200"
          :src="movie.imageDetails"
        />
        <div
          class="lg:w-1/2 flex flex-col justify-between w-full lg:pl-10 lg:pt-6 mt-6 lg:mt-0"
        >
          <div class="flex flex-col md:flex-row justify-between">
            <h1 class="text-3xl title-font font-medium mb-1">
              {{ movie.title }}
            </h1>
            <p class="text-3xl font-medium mb-1">₦{{ movie.price }}</p>
          </div>

          <p class="leading-relaxed mt-4">
            {{ movie.description }}
          </p>
          <div class="flex justify-between">
            <h2 class="text-sm title-font tracking-widest mt-3">
              <strong>RATED:</strong> {{ movie.rating }}
            </h2>
            <h2 class="text-sm title-font tracking-widest mt-3">
              <strong>PRICE:</strong> ₦{{ movie.price }}
            </h2>
          </div>

          <div class="flex justify-between">
            <h2 class="text-sm title-font tracking-widest mb-4 mt-1">
              <strong>DURATION:</strong> {{ movie.duration }}
            </h2>
            <h2 class="text-sm title-font tracking-widest mb-4 mt-1">
              <strong>AVAILABLE TICKET:</strong> {{ movie.availableTicket }}
            </h2>
          </div>
          <div class="mb-4">
            <strong> STARRING:</strong> {{ movie.starring }}
          </div>
        </div>

        <div class="w-full xl:w-60">
          <form
            class="mx-auto w-3/4 p-4 pt-10 lg:h-full xl:w-full flex flex-col justify-between bg-slate-100 text-black"
            action="post"
          >
            <p class="text-center mb-6 font-bold text-black">BUY TICKET</p>
            <Message
              class="text-center h-10 my-auto"
              v-bind:class="!formError && 'invisible'"
              :message="formError"
            />
            <div>
              <div class="w-full mb-6">
                <label for="state">Select state:</label>
                <select id="state" v-model="state">
                  <option>oyo</option>
                  <option>lagos</option>
                  <option>rivers</option>
                  <option>Abuja</option>
                </select>
              </div>
              <div class="w-full mb-6">
                <label for="state">cinemas:</label>
                <select id="cinemas" v-model="cinema">
                  <option>FilmHouse cinema</option>
                  <option>Viva cinema</option>
                  <option>Genesis cinema</option>
                </select>
              </div>
              <div class="w-full mb-6">
                <div>
                  <label for="date">Preferred date:</label>
                  <select v-model="date" id="date">
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </div>
                <div>
                  <label for="time">Preferred Time:</label>
                  <select id="time">
                    <option>2pm</option>
                    <option>4pm</option>
                    <option>6pm</option>
                    <option>9pm</option>
                  </select>
                </div>
              </div>
              <div>
                <h2 class="flex justify-between">
                  <strong>Quantity</strong>

                  <select v-model="quantity" name="Tickets" id="ticket">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </h2>
              </div>
            </div>
            <div>
              <h2 class="flex justify-between">
                <strong>Total Price:</strong>₦{{ quantity * movie.price }}
              </h2>

              <Button @click="buyTicket" content="buy ticket" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Message from '@/components/Message.vue'
import { useStore } from 'vuex'

import router from '@/router'

export default {
  name: 'MovieView',
  components: { Button, Message },

  setup() {
    const movie = ref({})
    const state = ref(null)
    const cinema = ref(null)
    const date = ref(null)
    const formError = ref(null)
    const quantity = ref(1)
    const totalAmount = ref(null)
    let moviePrice = null
    let movieName = null

    const store = useStore()
    const user = store.state.user
    const route = useRoute()
    route.params.id

    const getMovie = async () => {
      const response = await axios.get(
        `http://localhost:8500/api/movies/${route.params.id}`
      )
      moviePrice = response.data.price
      movieName = response.data.name
      movie.value = response.data
      console.log(user)
    }

    const buyTicket = async () => {
      // console.log(state)
      // console.log(state.value, cinema.value, date.value)
      // console.log(route.params.id)
      // if (!state.value || !cinema.value || !date.value) {
      //   formError.value = 'one or more fields need to filled'
      //   setTimeout(() => {
      //     formError.value = null
      //   }, 3000)
      // }
      // if (!user) {
      //   console.log('not user please login')
      //   formError.value = 'Please Login First'
      //   setTimeout(() => {
      //     formError.value = null
      //     router.push('/login')
      //   }, 5000)
      // }

      // create unique ticket code
      const reference = () => {
        let text = ''
        let possible =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length))
        return text
      }
      console.log(moviePrice * quantity.value)

      FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X',
        tx_ref: reference(),
        amount: moviePrice * quantity.value,
        status: hgugug,
        currency: 'NGN',
        payment_options: 'card, banktransfer, ussd',
        redirect_url: 'https://glaciers.titanic.com/handle-flutterwave-payment',
        meta: {
          consumer_id: user.id,
          consumer_mac: '92a3-912ba-1192a',
        },
        customer: {
          email: user.email,
          phone_number: '08102909304',
          name: user.name,
        },
        customizations: {
          title: movieName,
          description: `payment for ${quantity.value} ${movieName} ticket(s)`,
          logo: 'https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg',
        },
      })
    }

    return {
      getMovie,
      buyTicket,
      quantity,
      formError,
      state,
      cinema,
      date,
      movie,
    }
  },
  created() {
    this.getMovie()
    // console.log(route.query)
  },
}
</script>
