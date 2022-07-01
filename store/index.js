

// export const state = () => ({
//     emails: [],
//     passwords: [],
// })

// export const mutations = {
//     add_email(state, email){
//         state.emails = email
//     },
//     add_password(state, password){
//         state.passwords = password
//     }
// }
import Vue from 'vue'
import Vuex from 'vuex'
import pulsa from './pulsa'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    modules: {
      pulsa: {
        namespaced: true,
        ...pulsa,
      },
    },
  })