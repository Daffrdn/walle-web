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
  fetchProduct(store, { kategori }) {
    const API_URL = `https://bearuang.me/kategori/produk/${kategori}`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
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
