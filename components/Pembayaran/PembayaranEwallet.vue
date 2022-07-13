<template>
  <v-card class="container">
    <div class="wrapper">
      <v-card-title class="title">
        <v-btn icon @click="back">
          <v-icon x-large color="rgba(59, 23, 36, 1)">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <h2 class="pembayaran">Pembayaran</h2>
      </v-card-title>
      <div class="d-flex align-center justify-center">
        <h3 class="sub-tittle">{{list.metode_pembayaran}}</h3>
      </div>
      <div class="d-flex align-center justify-center">
        <v-img :src="list.qr_kode_link" max-width="300"></v-img>
      </div>
      <div class="detail-wrapper">
        <v-row class="d-flex justify-sm-space-between ma-0">
          <span class="sub">No. Invoice </span>
          <span class="sub-value">{{list.order_id}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Nama Produk</span>
          <span class="sub-value">{{list.nama_produk}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Harga </span>
          <span class="sub-value">{{list.harga}}</span>
        </v-row>
      </div><br>
      <v-btn dark block class="btn" color="#4EC49A" x-large elevation="0" @click="riwayat">
        Riwayat Transaksi
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PembayaranEwallet',
  data: () => ({
  }),
  computed: {
    list() {
      return this.$store.state.detailTransaction.ewallets
    },
  },
  methods: {
    back() {
      this.$router.push('/beranda')
    },
    riwayat() {
      this.$router.push('/riwayat')
    },
  },
}
</script>

<style scoped>
* {
  color: rgba(67, 67, 67, 1);
}
.container {
  width: 90%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
  padding-bottom: 100px;
}
.wrapper {
  margin: 0px 10% 4%;
}
.title {
  margin: 40px 0 40px -0.7%;
  padding: 0 !important;
}
.detail-wrapper {
  /* width: 80%; */
  margin: 0 auto;
  font-size: 24px;
}
.middle {
  margin: 15px 0 !important;
}

@media only screen and (max-width: 920px) {
  .sub {
    font-weight: bold;
  }
  .sub-value {
    margin-left: 5px;
  }
}
</style>