const state = () => ({
    ewallets: [],
    banks: [],
})


const mutations = {
    setEwallet(state, ewallet){
        state.ewallets = ewallet
    },
    setBank(state, bank){
        state.banks = bank
    },
}

export default {
    state,
    mutations,
  }