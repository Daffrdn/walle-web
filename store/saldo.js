import axios from 'axios'

const state = () => ({
  listSaldo: [],
  allSaldo: [],
})
const mutations = {
  setAll(state, payload) {
    state.allSaldo = payload
  },
  setSaldo(state, payload) {
    state.listSaldo = payload
  },
  setError(state, payload) {
    state.desc = payload
  },
}
const actions = {
  fetchProduct(store) {
    const API_URL = `https://bearuang.me/kategori/saldo`
    axios
      .get(API_URL, {
        headers: { 
         'Authorization': this.$auth.$storage._state['_token.local']
        }
       })
      .then((response) => {
        store.commit('setSaldo', response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
  fetchAll(store) {
    const API_URL = `https://bearuang.me/kategori/saldo?hitung=total`
    axios
      .get(API_URL, {
        headers: { 
         'Authorization': this.$auth.$storage._state['_token.local']
        }
       })
      .then((response) => {
        store.commit('setAll', response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
}

export default {
  state,
  actions,
  mutations,
}
