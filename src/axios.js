import axios from 'axios'
import { useStore } from 'vuex'

const setAxios = () => {
  axios.defaults.baseURL = 'https://deca-learn.herokuapp.com'
  axios.defaults.headers.common['Authorization'] =
    'Bearer ' + localStorage.getItem('token')

  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'
  console.log('test')
}

// const setExistingState = async () => {
//   try {
//     console.log('testing')
//     //await store.dispatch('setState')
//   } catch (error) {
//     console.log(error)
//   }
// }
setAxios()
export default setAxios
//setExistingState()
// defaults.headers.common.Authorization
