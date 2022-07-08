<template>
  <div>
    <br />
    <span>Tambah Produk</span>
    <br />
    <v-card class="mx-auto" elevation="0">
      <v-row class="mx-auto mt-5">
        <v-col>
          <v-img
            width="150"
            alt=""
            src="/admin/icon-pulsa.png"
            @click="toPulsa"
          ></v-img>
        </v-col>

        <v-col>
          <v-img width="150" alt="" src="/admin/icon-paketData.png"></v-img>
        </v-col>

        <v-col>
          <v-img width="150" alt="" src="/admin/icon-game.png"></v-img>
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
  methods: {
    toPulsa() {
      this.$router.push('tambah-produk/pulsa/tambah')
    },
  },
}
</script>

<style></style>
