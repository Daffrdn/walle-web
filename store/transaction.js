import axios from 'axios'

const state = () => ({
  listAdmin: [],
  listTransaksi: [],
  gagal: [],
  tertunda: [],
  berhasil: [],
})
const mutations = {
  listAdmin(state, payload) {
    state.listAdmin = payload
  },
  setAll(state, payload) {
    state.listTransaksi = payload
  },
  setGagal(state, payload) {
    state.gagal = payload
  },
  setTertunda(state, payload) {
    state.tertunda = payload
  },
  setBerhasil(state, payload) {
    state.berhasil = payload
  },
  setError(state, payload) {
    state.desc = payload
  },
}
const actions = {
  listAdmin(store) {
    const API_URL = `https://bearuang.me/transaksi`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        store.commit('listAdmin', response.data)
        console.log(response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
  fetchAllTransaksi(store) {
    const API_URL = `https://bearuang.me/transaksi/user`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        store.commit('setAll', response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
  fetchGagal(store) {
    const API_URL = `https://bearuang.me/transaksi/user?filter=gagal`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        store.commit('setGagal', response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
  fetchTertunda(store) {
    const API_URL = `https://bearuang.me/transaksi/user?filter=tertunda`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        store.commit('setTertunda', response.data)
      })

      .catch((error) => {
        store.commit('setError', error)
      })
  },
  fetchBerhasil(store) {
    const API_URL = `https://bearuang.me/transaksi/user?filter=berhasil`
    axios
      .get(API_URL, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      .then((response) => {
        store.commit('setBerhasil', response.data)
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
