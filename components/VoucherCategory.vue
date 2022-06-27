<template>
  <v-card class="container">
    <v-card-title class="title">
      <v-btn icon>
        <v-icon x-large color="rgba(59, 23, 36, 1)"> mdi-chevron-left </v-icon>
      </v-btn>
      <h2 class="voucher">Voucher Game</h2>
    </v-card-title>
    <div class="wrapper">
      <v-text-field
        type="text"
        label="Pencarian"
        color="rgba(78, 196, 154)"
        outlined
        :append-icon="'mdi-magnify'"
      />
      <v-row class="bg-card">
        <v-col v-for="i in 3" :key="i" cols="12" sm="8" md="6" lg="4"
          ><v-card
            class="card-voucher d-flex flex-column align-center justify-center pa-2 ma-1"
            height="207px"
          >
            <v-img :src="require('~/assets/provider/ml.png')" contain></v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'VoucherCategory',
  data: () => ({}),
  methods: {},
}
</script>
<style scoped>
.container {
  width: 80%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 50px;
}
.title {
  margin: 10px 5% 40px;
}
.voucher {
  margin-left: 1.5%;
  color: rgba(59, 23, 36, 1);
  font-weight: 500;
}
.v-text-field--outlined >>> fieldset {
  border: 1px solid rgba(78, 196, 154, 0.4);
  border-radius: 10px;
}
.wrapper {
  margin: 0px 10% 4%;
}
.bg-card {
  background-color: #f8fefc;
}

.card-voucher {
  border-radius: 10px;
  color: rgba(78, 196, 154, 1);
  box-shadow: 0px 4px 40px rgba(78, 196, 154, 0.06) !important;
}

.card-voucher:hover {
  background: rgba(78, 196, 154, 0.15);
  cursor: pointer;
}
</style>
