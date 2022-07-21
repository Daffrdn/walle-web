<template>
  <div>
    <br />
    <v-card class="rounded-cards" elevation="0" color="#4EC49A">
      <v-card-actions class="ml-6">
        <v-list-item class="grow mt-4">
          <v-list-item-action>
            <v-img width="60" alt="" src="/icon-nomer telepon.png"></v-img>
          </v-list-item-action>

          <v-list-item-content v-if="loggedInUser">
            <h3 class="white--text">Nomor Telepon Utama</h3>
            <v-list-item-title></v-list-item-title>
            <span class="white--text">{{ loggedInUser.nomor_handphone }}</span>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
      <br />
    </v-card>

    <v-card class="mx-auto" elevation="0">
      <v-row class="mx-auto mt-5">
        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div class="produk-background ma-auto d-flex mb-4" @click="pulsa">
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/user/icon-pulsa.svg"
              />
            </div>
            <p class="mx-auto">Pulsa</p>
          </div>
        </v-col>

        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div
              class="produk-background ma-auto d-flex mb-4"
              @click="paketData"
            >
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/user/icon-paketData.svg"
              />
            </div>
            <p class="mx-auto">Paket Data</p>
          </div>
        </v-col>

        <v-col>
          <div class="produk-wrapper d-flex flex-column">
            <div
              class="produk-background ma-auto d-flex mb-4"
              @click="voucherGames"
            >
              <img
                width="40"
                alt=""
                class="ma-auto"
                src="/user/icon-voucher.svg"
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
  layout: 'user',
  data() {
    return {}
  },
  computed: {
    loggedInUser() {
      return this.$store.state.auth.user
    },
    isAuthenticated() {
      return this.$store.state.auth.loggedIn
    },
  },
  methods: {
    pulsa() {
      this.$router.push('/pulsa')
    },
    paketData() {
      this.$router.push('/paketdata')
    },
    voucherGames() {
      this.$router.push('/vouchergame')
    },
  },
}
</script>

<style scoped>
.produk-wrapper {
  width: 200px;
  height: 200px;
}
.produk-background {
  border-radius: 50%;
  background-color: rgba(78, 196, 154, 0.1);
  width: 107px;
  height: 107px;
  cursor: pointer;
}
.rounded-card {
  border-radius: 50px;
}
.rounded-cards {
  border-radius: 15px;
}
</style>
