
import createPersistedState from 'vuex-persistedstate'

function getPlugins() {
    const plugins = []
  
    if (process.browser) {
      const vuexLocal = createPersistedState({
        storage: window.localStorage,
      })
  
      plugins.push(vuexLocal.plugin)
    }
    return plugins
  }
  
  export const plugins = getPlugins()
  
  export const state = () => ({
    userDetails: [],
  })
  
  export const mutations = {
    setUserDetails(state, val) {
      state.userDetails = val
    },
  }
  