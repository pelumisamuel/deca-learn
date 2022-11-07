import router from '@/router'
import axios from 'axios'
import { createStore, useStore } from 'vuex'
import setAxios from '@/axios'
useStore

const store = createStore({
  state: {
    user: null,
    movies: JSON.parse(localStorage.getItem('user')),
    User: JSON.parse(localStorage.getItem('user')),
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.User = payload
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

    // setState(context) {
    //   try {
    //     const response = JSON.parse(localStorage.getItem('user'))
    //     // localStorage.getItem('user')
    //     // this.state.user = response
    //     console.log(JSON.parse(localStorage.getItem('user')))
    //   } catch (error) {
    //     console.log(error)
    //   }

    //   //this.user = response.data
    // },

    /// SIGN UP
    async signUp(context, { name, email, password, phone }) {
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
        headers: {},
        method: 'post',
        url: 'https://deca-learn.herokuapp.com/users/register',
        data: {
          fullName: name,
          email,
          password,
          phone,
        },
      })
      const user = response
      console.log(user.data)

      if (user) {
        localStorage.setItem('token', user.data.token)
        localStorage.setItem('user', JSON.stringify(user.data))
        router.push('/')
        context.commit('setUser', user.data)
      }
    },

    // LOG IN
    async logIn(context, { email, password }) {
      console.log('LOG IN action')

      const response = await axios({
        method: 'post',
        url: 'https://deca-learn.herokuapp.com/users/login',
        data: {
          email,
          password,
        },
      })
      const user = response
      // console.log(user.data)

      if (user) {
        localStorage.setItem('token', user.data.token)
        localStorage.setItem('user', JSON.stringify(user.data))
        router.push('/')
        context.commit('setUser', user.data)
        setAxios()
      }
      // } else {
      //   throw new Error('could not complete signup')
      // }
    },

    // LOG OUT

    async logout(context) {
      //await signOut(auth)
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      context.commit('setUser', null)
      router.push('/')
    },
  },
})

// export store

export default store
