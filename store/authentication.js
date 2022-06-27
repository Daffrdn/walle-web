export const state = () => ({
  token: "",
})

export const mutations = {
  setToken(state, param){
    state.token = param
  },
}

export const actions = {
  setToken(store, param){
    store.commit('setToken', param)
  },
  async fetchLogin(store, param) {
    const e = await this.$axios.post(
      'http://178.128.124.201/user/login',
      {
        email: param.email,
        password: param.password,
      },
    )

    this.$cookies.set('token', e.response.data.token, {
      path: '/beranda',
      maxAge: 60 * 60 * 24 * 7,
    })
    store.commit('setToken', e.response.data.token)

    this.$router.push('/beranda')
  },
  fetchLogout(store) {},
}