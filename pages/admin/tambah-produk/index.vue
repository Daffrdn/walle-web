<template>
  <div>
    <v-card class="mx-auto" elevation="0">
      <v-row class="mx-auto mt-5">
        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div class="produk-background ma-auto d-flex mb-4" @click="toPulsa">
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/admin/icon-pulsa.svg"
              />
            </div>
            <p class="mx-auto">Pulsa</p>
          </div>
        </v-col>

        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div class="produk-background ma-auto d-flex mb-4" @click="toData">
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/admin/icon-paketData.svg"
              />
            </div>
            <p class="mx-auto">Paket Data</p>
          </div>
        </v-col>

        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div
              class="produk-background ma-auto d-flex mb-4"
              @click="toVoucher"
            >
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/admin/icon-voucher.svg"
              />
            </div>
            <p class="mx-auto">Voucher Game</p>
          </div>
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'IndexTmabahProdukPages',
  layout: 'admin',
  middleware: ['auth', 'admin'],
  methods: {
    toPulsa() {
      this.$router.push('tambah-produk/pulsa')
    },
    toData() {
      this.$router.push('tambah-produk/kuota')
    },
    toVoucher() {
      this.$router.push('tambah-produk/voucher')
    },
  },
}
</script>

<style>
.produk-wrapper {
  width: 200px;
  height: 200px;
}
.produk-background {
  border-radius: 50%;
  background-color: #ffe6e6;
  width: 107px;
  height: 107px;
  cursor: pointer;
}
</style>
