import axios from 'axios'

const state = () => ({
  listProduct: [],
})
const mutations = {
  setProduct(state, payload) {
    state.listProduct = payload
  },
  setError(state, payload) {
    state.desc = payload
  },
}
const actions = {
  fetchProduct(store, { kategori, provider }) {
    const API_URL = `https://bearuang.me/produk/pilih?kategori=${kategori}&provider=${provider}`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        console.log(this.$auth.$storage._state['_token.local'])
        store.commit('setProduct', response.data)
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
