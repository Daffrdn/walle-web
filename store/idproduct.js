// import axios from 'axios'

// const state = () => ({
//   detailProduct: [],
// })
// const mutations = {
//   setProduct(state, payload) {
//     state.detailProduct = payload
//   },
//   setError(state, payload) {
//     state.desc = payload
//   },
// }
// const actions = {
//   fetchProduct(store, { id }) {
//     const API_URL = `https://bearuang.me/produk/${id}`
//     axios
//       .get(API_URL, {
//         headers: {
//           Authorization: this.$auth.$storage._state['_token.local'],
//         },
//       })
//       .then((response) => {
//         store.commit('setProduct', response.data)
//       })
//       .catch((error) => {
//         store.commit('setError', error)
//       })
//   },
// }

// export default {
//   state,
//   actions,
//   mutations,
// }
