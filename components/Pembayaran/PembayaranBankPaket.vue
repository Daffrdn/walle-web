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
      <div v-if="bca">
      <!-- <div v-if="banks.length < 12"> -->
        <div class="detail-wrapper">
          <img src="/payment/bca.png" width="60px" alt="bca" />
          <span class="sub ml-5">BCA</span>
          <span class="sub-value">Virtual Account</span>
        </div>
      </div>
      <div v-if="bni">
      <!-- <div v-else-if="banks.length > 12 && banks.length <= 16"> -->
        <div class="detail-wrapper">
          <img src="/payment/bni.png" width="60px" alt="bca" />
          <span class="sub ml-5">BNI</span>
          <span class="sub-value">Virtual Account</span>
        </div>
      </div>
      <div v-if="bri">
      <!-- <div v-else-if="banks.length > 16"> -->
        <div class="detail-wrapper">
          <img src="/payment/bri.png" width="60px" alt="bca" />
          <span class="sub ml-5">BRI</span>
          <span class="sub-value">Virtual Account</span>
        </div>
      </div>
      <div class="line"></div>
      <div class="d-flex justify-space-between">
        <div>
          <span>No Rekening</span>
          <h1 class="sub-tittle">{{list.nomor_va}}</h1>
        </div>
        <div class="d-flex align-center mt-3">
          <v-btn dark text class="mt-3" color="#4EC49A" elevation="0" @click="doCopy">Salin</v-btn>
        </div>
      </div>
      <br>
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
          <span class="sub-value">Rp. {{list.harga}} WIB</span>
        </v-row>
      </div>
      <br>
      <v-btn dark block class="btn" color="#4EC49A" x-large elevation="0" @click="riwayat">
        Riwayat Transaksi
      </v-btn><br>
      <v-btn dark block outlined class="btn" color="#4EC49A" x-large elevation="0" @click="confirmation(param)">
        Konfirmasi
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PPembayaranBank',
  data: () => ({
  }),
  computed: {
    param() {
      return this.$route.params.id
    },
    list() {
      return this.$store.state.detailTransaction.banks
    },
    banks() {
      return this.$store.state.detailTransaction.banks.nomor_va
    },
    bca() {
      return this.$store.state.detailTransaction.banks.nomor_va.length < 12
    },
    bri() {
      return this.$store.state.detailTransaction.banks.nomor_va.length > 17
    },
    bni(){
      return this.$store.state.detailTransaction.banks.nomor_va.length > 12 
      && this.$store.state.detailTransaction.banks.nomor_va.length < 17
    },
  },
  methods: {
    back() {
      this.$router.push('/beranda')
    },
    riwayat() {
      this.$router.push('/riwayat')
    },
    doCopy() {
      try {
        this.$copyText(this.$store.state.detailTransaction.banks.nomor_va);
      } catch (e) {
        console.error(e);
      }
    },
    confirmation(param) {
      const params = this.$store.state.detailTransaction.banks
      this.$router.push('/paketdata/'+ param +'/' + params.id)
    }
  },
}
</script>

<style scoped>
* {
  color: rgba(67, 67, 67, 1);
}
h1 {
  color: #C44E78;
}
/* end of form */
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
.pembayaran {
  font-size: 16px;
  margin-left: 1.5%;
  color: rgba(59, 23, 36, 1);
  font-weight: 400;
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
.line {
  width: 100%;
  margin: 30px 0;
  height: 2px;
  background-color: #d9d9d9;
}
</style>