import axios from 'axios'

const state = () => ({
  listSaldo: [],
})
const mutations = {
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
}

export default {
  state,
  actions,
  mutations,
}
