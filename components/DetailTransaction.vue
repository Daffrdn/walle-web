<template>
  <div class="bg">
  <v-card class="container">
    <div class="wrapper">
      <v-row class="d-flex justify-center mx-auto">
        <span class="title">Detail Transaksi</span>
      </v-row>
      <div class="detail-wrapper">
        <v-row class="d-flex justify-sm-space-between ma-0">
          <span class="sub">No. Invoice </span>
          <span class="sub-value">{{detailTransaksi.order_id}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Tanggal Transaksi </span>
          <span class="sub-value">{{detailTransaksi.transaction_time}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0">
          <span class="sub">Jam </span>
          <span class="sub-value">{{detailTransaksi.transaction_time}} WIB</span>
        </v-row>
        <!-- LINE 1-->
        <div class="line"></div>
        <!-- LINE 1-->
        <span class="sub-title">Detail Layanan</span>
        <v-row class="d-flex justify-sm-space-between ma-0 mt-4">
          <span class="sub">Layanan </span>
          <span class="sub-value">{{detail.deskripsi}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Harga </span>
          <span class="sub-value">Rp. {{detail.nominal}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Biaya Admin </span>
          <span class="sub-value">Rp. {{detail.harga - detail.nominal}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0">
          <span class="sub">No. Hp </span>
          <span class="sub-value">0895 1537 0909</span>
        </v-row>
        <!-- LINE 2-->
        <div class="line"></div>
        <!-- LINE 2-->
        <span class="sub-title">Total Pembayaran</span>
        <v-row class="d-flex justify-sm-space-between ma-0 mt-4">
          <span class="sub">Metode Pembayaran</span>
          <span class="sub-value">{{detailTransaksi.payment_type}} {{detailTransaksi.bank}}</span>
        </v-row>
        <v-row class="d-flex justify-sm-space-between ma-0 middle">
          <span class="sub">Total Pembayaran</span>
          <span class="sub-value">Rp. {{detail.harga}}</span>
        </v-row>
      </div>

      <!-- button -->
      <span class="d-flex justify-center"
        ><v-btn
          x-large
          color="rgba(78, 196, 154, 1)"
          width="100%"
          class="buy-button"
          @click="kembali"
          >Beli Lagi</v-btn
        ></span
      >
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'DetailTransaction',
  middleware: 'auth',
  data() {
    return {
    }
  },
  computed: {
    params() {
      return this.$route.params.id
    },
    detailTransaksi() {
      return this.$store.state.transaction.gagal
    },
    detail() {
      return this.$store.state.transaction.gagal.produk
    },
  },
  methods: {
    kembali(){
      this.$router.push('/riwayat')
    },
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
}
.wrapper {
  margin: 0px 10% 4%;
  padding: 60px 0 10px;
}
.title {
  color: rgba(78, 196, 154, 1);
  font-weight: normal !important;
  font-size: 32px !important;
  margin-bottom: 50px;
}
.detail-wrapper {
  margin: 0 auto;
  font-size: 16px;
  color: #434343;
}

.middle {
  margin: 15px 0 !important;
}
.line {
  width: 100%;
  margin: 30px 0;
  height: 2px;
  background-color: #d9d9d9;
}

.sub-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-button {
  text-transform: none;
  border-radius: 10px !important;
  color: white;
  box-shadow: none !important;
  font-weight: normal;
  margin-top: 30px;
}
@media only screen and (max-width: 920px) {
  .sub {
    font-weight: bold;
  }
  .sub-value {
    margin-left: 5px;
  }
}
@media only screen and (max-width: 600px) {
  .title {
    font-size: 30px !important;
  }
}
</style>