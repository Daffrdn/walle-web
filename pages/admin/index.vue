<template>
  <div v-if="loggedInUser === 1">
    <br /><br />
    <v-row class="d-flex justify-center">
      <v-col sm="5">
        <v-card dark color="#C44E78" elevation="0" class="card">
          <v-card-title class="d-flex justify-center">
            <h1>Rp.{{allSaldo.saldo}}</h1>
          </v-card-title>
          <v-card-text class="ml-6">
            <span class="saldo-desc">Saldo saat ini</span>
          </v-card-text>
          <br />
          <v-btn
            block
            dark
            x-large
            class="mt-3 radius-button"
            color="#B0466C"
            to="/admin/tambah-saldo"
            elevation="0" 
          >
            Selengkapnya
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col sm="4" class="mr-12 pl-0">
        <v-card dark color="#4EC49A" elevation="0" class="card">
          <v-card-title class="d-flex justify-center">
            <h1>Rp. {{ SaldoKeluar.pemasukan }}</h1>
          </v-card-title>
          <v-card-text class="ml-6">
            <span class="saldo-desc">Saldo keluar</span>
          </v-card-text>
          <br />
          <v-btn
            block
            dark
            x-large
            class="mt-3 radius-button"
            color="#37896C"
            to="/admin/status-transaksi"
            elevation="0"
          >
            Selengkapnya
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  layout: 'admin',
  middleware: ["auth","admin"],
  computed: {
    allSaldo() {
      return this.$store.state.saldo.allSaldo
    },
    SaldoKeluar() {
      return this.$store.state.transaction.saldoKeluar
    },
    loggedInUser() {
      return this.$store.state.auth.user.role_id
    },
  },
  mounted() {
    this.fetchAll()
    this.listSaldoKeluar()
  },
  methods: {
    fetchAll() {
      this.$store.dispatch('saldo/fetchAll')
    },
    listSaldoKeluar() {
      this.$store.dispatch('transaction/listSaldoKeluar')
    },
  },
}
</script>

<style scoped>
.card {
  position: absolute;
  width: 376px;
  height: 207px;
  border-radius: 10px;
}
.saldo-desc {
  color: white;
}
h1 {
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  text-align: center;
}

span {
  /* font-family: 'Poppins'; */
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  display: flex;
  align-items: center;
}

.radius-button {
  border-radius: 0px 0px 10px 10px;
  text-transform: none !important;
}
</style>
