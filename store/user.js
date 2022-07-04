const state = () => ({
    emails: [],
    passwords: [],
})


const mutations = {
    add_email(state, email){
        state.emails = email
    },
    add_password(state, password){
        state.passwords = password
    }
}

export default {
    state,
    mutations,
  }