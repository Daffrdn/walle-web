<template>
  <div>
    <br />
    <br />

    <v-row class="">
      <v-col cols="12" sm="6" lg="4" class="d-flex justify-center">
        <v-card dark color="#C44E78" elevation="0" class="card">
          <v-card-title class="d-flex justify-start mt-3">
            <p class="saldo">Rp. {{ listSaldo.saldo[0].saldo }}</p>
          </v-card-title>
          <v-card-text class="mb-7 d-flex justify-start">
            <p class="saldo-kategori">
              saldo {{ listSaldo.saldo[0].kategory.nama }}
            </p>
          </v-card-text>
          <v-btn
            block
            dark
            x-large
            class="mt-3 radius-button"
            color="#B0466C"
            elevation="0"
            @click="isiSaldo"
          >
            Tambah Saldo
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4" class="d-flex justify-center">
        <v-card dark color="#4EC49A" elevation="0" class="card">
          <v-card-title class="d-flex justify-start mt-3">
            <p class="saldo">Rp. {{ listSaldo.saldo[1].saldo }}</p>
          </v-card-title>
          <v-card-text class="mb-7 d-flex justify-start">
            <p class="saldo-kategori">
              saldo {{ listSaldo.saldo[1].kategory.nama }}
            </p>
          </v-card-text>
          <v-btn
            block
            dark
            x-large
            class="mt-3 radius-button"
            color="#37896C"
            elevation="0"
            @click="isiSaldo"
          >
            Tambah Saldo
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="4" class="d-flex justify-center">
        <v-card dark color="#FFC961" elevation="0" class="card">
          <v-card-title class="d-flex justify-start mt-3">
            <p class="saldo">Rp. {{ listSaldo.saldo[2].saldo }}</p>
          </v-card-title>
          <v-card-text class="mb-7 d-flex justify-start">
            <p class="saldo-kategori">
              saldo {{ listSaldo.saldo[2].kategory.nama }}
            </p>
          </v-card-text>
          <v-btn
            block
            dark
            x-large
            class="mt-3 radius-button"
            color="#B38D44"
            elevation="0"
            @click="isiSaldo"
          >
            Tambah Saldo
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card>
      </v-col>
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
    fetchProduct() {
      this.$store.dispatch('saldo/fetchProduct')
    },
  },
}
</script>

<style scoped>
.card {
  /* position: absolute; */
  width: 376px;
  height: 207px;
  border-radius: 10px;
}

.saldo {
  font-weight: 700;
  font-size: 40px;
}
.saldo-kategori {
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
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
