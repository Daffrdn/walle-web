<template>
  <v-card class="container">
    <div class="wrapper">
      <v-card-title class="title">
        <v-btn icon @click="back">
          <v-icon x-large color="rgba(59, 23, 36, 1)">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <h2 class="voucher">Voucher Game</h2>
      </v-card-title>
      <div class="wrapper-card">
        <v-row class="">
          <v-col
            class="flex justify-center text-center"
            cols="12"
            sm="8"
            md="6"
            lg="4"
            ><v-card
              class="card-voucher d-flex flex-column align-center justify-center pa-2 ma-1"
              height="207px"
              @click="toGoogleplay"
            >
              <v-img contain src="/game/gplay.png" />
            </v-card>
            <div class="name-voucher mt-2"><span>Google Play Store</span></div>
          </v-col>
          <v-col
            class="flex justify-center text-center"
            cols="12"
            sm="8"
            md="6"
            lg="4"
            ><v-card
              class="card-voucher d-flex flex-column align-center justify-center pa-2 ma-1"
              height="207px"
              @click="toSteam"
            >
              <v-img contain src="/game/steam.png" />
            </v-card>
            <div class="name-voucher mt-2"><span>Steam</span></div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'VoucherCategory',
  data: () => ({}),
  methods: {
    back() {
      this.$router.push('/')
    },
    toGoogleplay() {
      this.$router.push('/vouchergame/googleplay')
    },
    toSteam() {
      this.$router.push('/vouchergame/steam')
    },
  },
}
</script>
<style scoped>
.container {
  width: 80%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
}
.title {
  margin: 40px 0 40px -0.7%;
  padding: 0 !important;
}
.voucher {
  font-size: 16px;
  margin-left: 1.5%;
  color: rgba(59, 23, 36, 1);
  font-weight: 400;
}
.wrapper {
  margin: 0px 10% 4%;
}

.card-voucher {
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(78, 196, 154, 0.1) !important;
  border-radius: 10px !important;
}

.card-voucher:hover {
  background: rgba(78, 196, 154, 0.15);
  cursor: pointer;
}
.name-voucher {
  font-size: 16px;
  color: #434343;
}
</style>
