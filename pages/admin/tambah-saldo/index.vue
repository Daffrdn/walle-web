<template>
  <div>
<<<<<<< HEAD
    <br>
    <span>Tambah Saldo</span>
    <br>
    <v-row class="d-flex justify">
        <v-col v-for="(saldo, i) in listSaldo.saldo" :key="saldo.id">
            <v-card 
=======
    <br />
    <br />

    <v-row class="">
      <v-col
        v-for="saldo in listSaldo.saldo"
        :key="saldo.id"
        cols="12"
        sm="6"
        lg="4"
        class="d-flex justify-center"
      >
        <v-card dark color="#C44E78" elevation="0" class="card">
          <v-card-title class="d-flex justify-center">
            <h1>Rp. {{ saldo.saldo }}</h1>
          </v-card-title>
          <v-card-text class="mt-2 mb-7 d-flex justify-center">
            <span>saldo {{ saldo.kategory.nama }} </span>
          </v-card-text>
          <v-btn
            block
>>>>>>> 903642c4bb75954d4fa5a29e999d490272fbc1f0
            dark
            x-large
            class="mt-3 radius-button"
            color="#B0466C"
            elevation="0"
<<<<<<< HEAD
            class="card" 
            >   
                <v-card-title class="d-flex justify-center">
                    <h1>Rp. {{ saldo.saldo }}</h1>
                </v-card-title>
                <v-card-text class="ml-6">
                    <span>saldo {{saldo.id}} saat ini</span>
                </v-card-text>
                <br>
                <v-btn 
                block 
                dark 
                x-large
                class="mt-3 radius-button"
                color="#B0466C"
                elevation="0"
                @click="isiSaldo(saldo)"
                > 
                Tambah Saldo
                <v-icon>mdi-chevron-right</v-icon> 
                </v-btn>
            </v-card>
        </v-col>
=======
            @click="isiSaldo"
          >
            Tambah Saldo
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
>>>>>>> 903642c4bb75954d4fa5a29e999d490272fbc1f0
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AdminTambahSaldoPages',
  layout: 'admin',
  middleware: 'auth',
  computed: {
    listSaldo() {
      return this.$store.state.saldo.listSaldo
    },
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    isiSaldo() {
      //   this.$store.commit('saldo/setSaldo', param)
      this.$router.push('/admin/tambah-saldo/tambah')
    },
<<<<<<< HEAD
    methods: {
        isiSaldo(param){
            this.$store.commit('saldo/setSaldo', param)
            this.$router.push({ path: '/admin/tambah-saldo/' + param.id})
        },
        fetchProduct() {
            this.$store.dispatch('saldo/fetchProduct');
        },
    }
=======
    fetchProduct() {
      this.$store.dispatch('saldo/fetchProduct')
    },
  },
>>>>>>> 903642c4bb75954d4fa5a29e999d490272fbc1f0
}
</script>

<style scoped>
.card {
  /* position: absolute; */
  width: 376px;
  height: 207px;
  border-radius: 10px;
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
.v-btn {
  text-transform: none;
}
.radius-button {
  border-radius: 0px 0px 10px 10px;
}
</style>
