import router from '@/router'
import axios from 'axios'
import { createStore, useStore } from 'vuex'
useStore

const store = createStore({
  state: {
    user: null,
    movies: [],
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('user state changed', state.user)
    },
    setMovies(state, payload) {
      state.movies = payload
      console.log('movies state added')
    },
  },

  actions: {
    // GET ALL MOVIES
    async getMovies(context, {}) {
      console.log('get all movies')
    },

    /// SIGN UP
    async signUp(context, { name, email, password }) {
      console.log('signup action')

      //   const response = await fetch('http://localhost:8500/api/users/login', {
      //     method: 'POST',
      //     headers: {
      //       'Content-type': 'application/json',
      //       body: JSON.stringify({ email, password }),
      //     },
      //   })
      // try {
      const response = await axios({
        method: 'post',
        url: 'http://192.168.88.251:8500/api/users/register',
        data: {
          name,
          email,
          password,
        },
      })
      const user = response
      console.log(user.data)

      if (user) {
        router.push('/')
        context.commit('setUser', user.data)
      }
    },

    // LOG IN
    async logIn(context, { email, password }) {
      console.log('LOG IN action')

      const response = await axios({
        method: 'post',
        url: 'http://192.168.88.251:8500/api/users/login',
        data: {
          email,
          password,
        },
      })
      const user = response
      console.log(user.data)

      if (user) {
        router.push('/')
        context.commit('setUser', user.data)
      }
      // } else {
      //   throw new Error('could not complete signup')
      // }
    },

    // LOG OUT

    async logout(context) {
      //await signOut(auth)
      context.commit('setUser', null)
      router.push('/')
    },
  },
})

// export store

export default store
