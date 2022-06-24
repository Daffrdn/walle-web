export const state = () => ({
  user: false,
  loggedIn: null
  })

  export const getters = {
    isAuthenticated(state) {
    return state.auth.loggedIn
    },
    loggedInUser(state) {
    return state.auth.user
    }
  }
  
  export const mutations = {
    login (state, { user }) {
    state.user = user
    },
    logout (state, payload) {
    state.user = false
    }
  }
  
  export const actions = {
    login ({ commit, state}, { user }) {
    commit({ type: 'login', user })
    },
    logout ({commit, state}, payload) {
    commit({ type: 'logout', payload })
    }
  }