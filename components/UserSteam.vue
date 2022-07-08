<template>
  <div>
    <v-card class="container">
      <div class="wrapper">
        <v-card-title class="title">
          <v-btn icon @click="back">
            <v-icon x-large color="rgba(59, 23, 36, 1)">
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <h2 class="pulsa">Voucher Game</h2>
        </v-card-title>
        <v-flex>
          <img width="120px" class="img-voucher" src="/game/steam.png" />
        </v-flex>
        <p class="pilih-nominal mt-4">Pilih Nominal :</p>
        <v-row class="d-flex justify-center">
          <!-- Product -->
          <v-col
            v-for="item in listPulsa.produk"
            :key="item.id"
            cols="12"
            sm="6"
            lg="4"
            ><v-card
              :class="[item.tersedia == false ? 'activeClass' : '']"
              class="detail-pulsa-nominal d-flex flex-column align-center justify-center pa-2 ma-1"
              height="140px"
              @click="saveParam(item)"
            >
              <span v-if="item.tersedia == false" class="empty"
                >Maaf, saldo lagi habis
                <v-icon class="warning-icon ml-1" small color="red">
                  mdi-alert-circle-outline</v-icon
                >
              </span>
              <span class="mb-1">
                <span class="pulsa-rp font-weight-bold">Rp</span>
                <span class="pulsa-price font-weight-bold"
                  >{{ item.harga }}
                </span>
              </span>
              <p class="get-pulsa">Saldo : {{ item.nominal }}</p>
            </v-card>
          </v-col>
          <!-- end of Product -->
        </v-row>
      </div>
    </v-card>
    <v-card v-show="totalShow" class="wrapper-pulsa-total">
      <v-row class="pulsa-total d-flex align-center justify-space-between">
        <span>
          <span class="font-weight-regular total-bayar">Total Bayar</span>
          <p class="total font-weight-bold ma-0 mt-1">Rp {{ total }}</p>
        </span>
        <v-btn
          color="rgba(78, 196, 154, 1)"
          class="pay-button mb-1"
          @click="toPayment"
          >Beli</v-btn
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NominalSteam',

  data: () => ({
    kategori: '3',
    provider: '5',
    total: '',
    totalShow: false,
    parameter: '',
  }),
  computed: {
    listPulsa() {
      return this.$store.state.pulsa.listProduct
    },
  },
  mounted() {
    this.fetchProduct({
      kategori: this.kategori,
      provider: this.provider,
    })
  },
  methods: {
    fetchProduct({ kategori, provider }) {
      this.$store.dispatch('pulsa/fetchProduct', {
        kategori,
        provider,
      })
    },
    back() {
      this.$router.push('/vouchergame')
    },
    saveParam(param) {
      this.totalShow = true
      window.console.log(param.id)
      this.parameter = param.id
      this.total = param.harga
      // console.log(param.harga)
      // this.detail = this.items[index].id
    },
    handleClick(item) {
      console.log(item.id)
    },
    toPayment() {
      window.console.log(this.parameter)
      this.$router.push({ path: '/produk/' + this.parameter })
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
.pulsa {
  font-size: 16px;
  margin-left: 1.5%;
  color: rgba(59, 23, 36, 1);
  font-weight: 400;
}
.title {
  margin: 40px 0 40px -0.7%;
  padding: 0 !important;
}
.pilih-nominal {
  color: #434343;
}
.wrapper {
  margin: 0px 10% 4%;
}
.empty {
  color: #ff0000 !important;
  font-size: 12px;
  font-weight: 400;
}
.activeClass {
  pointer-events: none;
  background-color: #f4f4f4;
}
.activeClass span,
p {
  color: #9c9c9c;
}

.warning-icon {
  float: right;
}
.pulsa-price {
  font-size: 32px;
  font-weight: 400 !important;
}
.img-voucher {
  margin-left: 4%;
}
.pulsa-rp {
  position: relative;
  margin-right: 5px;
  font-size: 24px;
  font-weight: 500 !important;
}
.get-pulsa {
  color: rgba(166, 166, 166, 1);
  font-size: 16px;
}
.wrapper-pulsa-total {
  position: fixed;
  margin: 0 auto 20px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 71.5%;
  padding: 10px 0;
  box-shadow: 0px 4px 40px rgba(78, 196, 154, 0.15) !important;
  border-radius: 10px;
}
.total-bayar {
  font-weight: 600;
  font-size: 16px;
  color: #9c9c9c;
}
.pulsa-total {
  padding: 20px 50px;
  height: 122px;
}

.v-text-field--outlined >>> fieldset {
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05);
  border: 1px solid #4ec49a;
  border-radius: 10px;
}
.v-text-field >>> input {
  color: #4ec49a !important;
}
.detail-pulsa-nominal {
  border-radius: 10px;
  color: rgba(78, 196, 154, 1);
  border: 1px solid #dfdfdf !important;
  box-shadow: none !important;
}
.detail-pulsa-nominal:hover {
  border: none !important;
  background: rgba(78, 196, 154, 0.15);
}

.detail-pulsa-nominal:focus {
  background: rgba(78, 196, 154, 0.1);
  box-shadow: 0px 4px 40px rgba(78, 196, 154, 0.06) !important;
  border: none !important;
}
.provider-img {
  border: 1px solid rgba(78, 196, 154, 0.4);
  border-radius: 10px;
}
.total {
  color: rgba(78, 196, 154, 1);
  font-size: 32px !important;
  font-weight: 500 !important;
}
.pay-button {
  min-width: 0px;
  width: 250px;
  min-height: 65px;
  color: white;
  text-transform: none;
  font-size: 16px;
  font-weight: normal;
}
@media only screen and (max-width: 960px) {
  .pay-button {
    width: 119px;
  }
}
@media only screen and (max-width: 600px) {
  .pay-button {
    width: 70px;
  }
  .total-bayar {
    font-size: 20px;
  }
  .total {
    font-size: 30px;
  }
}
</style>
