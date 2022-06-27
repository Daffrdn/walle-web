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
    const API_URL = `http://178.128.124.201/produk/pilih?kategori=${kategori}&provider=${provider}`
    axios
      .get(API_URL)
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
