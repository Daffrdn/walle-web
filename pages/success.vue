<template>
  <div class="bg">
    <br />
    <v-card class="container">
      <v-row>
        <v-col class="d-flex justify-center"
          ><v-card-title class="title">Pembayaran Berhasil</v-card-title></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <v-img contain height="429px" src="/success.png"></v-img
        ></v-col>
      </v-row>
      <span class="d-block d-flex justify-center"
        ><v-btn x-large color="rgba(78, 196, 154, 1)" width="80%" class="detail"
          >Detail Transaksi</v-btn
        ></span
      >
      <span class="d-block d-flex justify-center mt-6"
        ><v-btn outlined x-large width="80%" class="back">Kembali</v-btn></span
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'PembayaranBerhasil',
  data() {
    return {}
  },
}
</script>

<style scoped>
.container {
  width: 80%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 50px;
  padding-bottom: 100px;
}
.title {
  color: rgba(78, 196, 154, 1);
  font-weight: 700 !important;
  font-size: 32px !important;
  margin-top: 60px;
}
.v-btn {
  text-transform: none;
  font-weight: bold;
  border-radius: 10px !important;
}
.detail {
  color: white;
  box-shadow: none !important;
  margin-top: 10px;
}
.back {
  color: rgba(78, 196, 154, 1);
  border-color: rgba(78, 196, 154, 1) !important;
}
.back:hover {
  color: rgba(78, 196, 154, 1);
}
</style>
