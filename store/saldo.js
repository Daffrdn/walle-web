export const state = () => ({
    saldos: null,
})

export const mutations = {
    tambah_saldo(state, saldo){
        state.saldos = saldo
    },
}