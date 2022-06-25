export const state = () => ({
    emails: [],
    passwords: [],
})

export const mutations = {
    add_email(state, email){
        state.emails = email
    },
    add_password(state, password){
        state.passwords = password
    }
}