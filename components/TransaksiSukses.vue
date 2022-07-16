<template>
<div class="bg">
  <v-card class="container">
    <div class="wrapper text-center">
     <span class="title">Pembayaran Berhasil</span>
    <v-img contain height="410px" src="/success.png"></v-img>
    <v-btn 
        dark 
        block 
        color="#4EC49A" 
        class="buy-button" 
        elevation="0"
        @click="detailTransaksi(param)"
        x-large
    >Detail Transaksi</v-btn>
    <v-btn 
        dark 
        block 
        outlined 
        color="#4EC49A" 
        class="buy-button" 
        elevation="0" 
        to="/beranda"
        x-large
    >Kembali</v-btn>
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  name: 'TransaksiSukses',
  computed: {
    param() {
      return this.$route.params.id
    }
  },
  methods: {
    detailTransaksi(param){
      this.$router.push('/riwayat/' + param)
    }
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
.buy-button {
  text-transform: none;
  border-radius: 10px !important;
  color: white;
  box-shadow: none !important;
  font-weight: normal;
  margin-top: 30px;
}
.title {
  color: rgba(78, 196, 154, 1);
  font-weight: 700 !important;
  font-size: 32px !important;
  margin-top: 60px;
}

span {
    color: #4EC49A;
}
</style>