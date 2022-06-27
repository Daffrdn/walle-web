<template>
  <v-card class="container">
    <div class="wrapper">
      <v-card-title class="title">
        <v-btn icon @click="back">
          <v-icon x-large color="rgba(59, 23, 36, 1)">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <h2 class="pulsa">Pulsa</h2>
      </v-card-title>
      <span><h2 class="sub-title mb-4 ml-3">Nomor Telepon</h2></span>

      <v-row>
        <v-col cols="12" sm="2">
          <v-card class="provider-img pa-2" height="56px" outlined>
            <v-img
              v-show="indosat"
              height="38px"
              contain
              src="/provider/indosat.png"
            />
            <v-img
              v-show="telkomsel"
              height="38px"
              contain
              src="/provider/telkomsel.png"
            />
            <v-img v-show="xl" height="38px" contain src="/provider/xl.png" />
            <v-img
              v-show="axis"
              height="38px"
              contain
              src="/provider/axis.png"
            />
            <v-img v-show="tri" height="38px" contain src="/provider/tri.png" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="number"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            :rules="phoneRules"
            type="text"
            label="Nomor Telepon"
            outlined
            color="black"
            single-line
            @keyup="isPhoneValid"
          />

          <span v-show="phoneErr" style="color: red"
            >Incorrect phone number
          </span>
        </v-col>
      </v-row>
      <h2 v-show="product" class="pb-6 sub-title ml-3">
        Pilih Nominal Pulsa :
      </h2>

      <v-row class="d-flex justify-center">
        <!-- Product -->
        <v-col
          v-for="item in listPulsa.produk"
          v-show="product"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          ><v-card
            class="detail-pulsa-nominal d-flex flex-column align-center justify-center pa-2 ma-1"
            height="160px"
            @click="saveParam(item)"
          >
            <!-- <span v-if="item.stok < 1" class="empty"
              >Maaf, saldo lagi habis
              <v-icon class="warning-icon" dense color="red">
                mdi-alert-circle-outline</v-icon
              >
            </span> -->
            <span class="mb-1">
              <span class="pulsa-rp font-weight-bold">Rp</span>
              <span class="pulsa-price font-weight-bold"
                >{{ item.harga }}
              </span>
            </span>
            <p class="get-pulsa">Pulsa : {{ item.nominal }}</p>
          </v-card>
        </v-col>
        <!-- end of Product -->
        <!-- GPLAY -->
        <!-- <v-col
          v-for="item in list.gplayz"
          v-show="telkomsel"
          :key="'telkomsel' + item.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          ><v-card
            :class="[item.stok < 1 ? 'activeClass' : '']"
            class="detail-pulsa-nominal d-flex flex-column align-center justify-center pa-2 ma-1"
            height="187px"
            @click="handleClick(item)"
          >
            <span v-if="item.stok < 1" class="empty"
              >Maaf, saldo lagi habis
              <v-icon class="warning-icon" dense color="red">
                mdi-alert-circle-outline</v-icon
              >
            </span>
            <span>
              <span class="pulsa-rp font-weight-bold">Rp</span>
              <span class="pulsa-price font-weight-bold"
                >{{ item.price }}
              </span>
            </span>
            <p class="get-pulsa" :class="[item.stok < 1 ? 'getEmpty' : '']">
              Pulsa : {{ item.get }}
            </p>
          </v-card>
        </v-col> -->
        <!-- end of GPLAY -->
        <p>{{ listPulsa }}</p>
      </v-row>
      <v-card v-show="totalShow" class="wrapper-pulsa-total">
        <v-row class="pulsa-total d-flex align-center justify-space-between">
          <span>
            <span class="font-weight-regular total-bayar">Total Bayar</span>
            <p class="total font-weight-bold ma-0 mt-1">{{ total }}</p>
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
  </v-card>
</template>

<script>
export default {
  name: 'NominalPulsa',

  data: () => ({
    kategori: '1',
    provider: '1',
    activeClass: 'disabled',
    number: '',
    total: '',
    totalShow: false,
    parameter: '',
    phoneRules: [
      (v) => v.length > 10 || 'Nomor terlalu pendek, minimal 10 karakter',
    ],
    phoneErr: false,
    xl: false,
    product: false,
    tri: false,
    axis: false,
    telkomsel: false,
    indosat: false,
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
      this.$router.push('/')
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
      this.$router.push({ path: '/user/' + this.parameter })
    },
    isPhoneValid() {
      const indosat = /^(\\+62|\\+0|0|62)8(57|56)[0-9]{0,9}$/
      const telkomsel =
        /^(\\+62|\\+0|0|62)8(52|53|11|12|13|21|22|51)[0-9]{0,9}$/
      const tri = /^(\\+62|\\+0|0|62)8(96|95|97|98|99)[0-9]{0,9}$/
      const xl = /^(\\+62|\\+0|0|62)8(18|19|59|77|78)[0-9]{0,9}$/
      const axis = /^(\\+62|\\+0|0|62)8(32|33|38)[0-9]{0,9}$/
      // const smartfren = /^(\\+62|\\+0|0|62)8(81|82|83|84|85|86|86|88|89)[0-9]{0,9}$/
      if (indosat.test(this.number)) {
        // if true
        this.indosat = true
      } else if (telkomsel.test(this.number)) {
        this.telkomsel = true
        this.product = true
        this.fetchProduct({
          kategori: 1,
          provider: 6,
        })
      } else if (tri.test(this.number)) {
        this.tri = true
      } else if (xl.test(this.number)) {
        this.xl = true
      } else if (axis.test(this.number)) {
        this.axis = true
        this.product = true
        this.fetchProduct({
          kategori: 1,
          provider: 1,
        })
      } else {
        // if false

        this.tri = false
        this.indosat = false
        this.telkomsel = false
        this.axis = false
        this.xl = false
        this.product = false
      }
    },
  },
}
</script>
<style scoped>
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
.sub-title {
  color: rgba(67, 67, 67, 1);
  font-weight: 400;
  font-size: 16px;
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
  opacity: 0.7;
}
.activeClass span {
  color: rgba(166, 166, 166, 0.6);
}
.activeClass p {
  color: rgba(166, 166, 166, 0.6);
}
.warning-icon {
  float: right;
}
.pulsa-price {
  font-size: 32px;
  font-weight: 400 !important;
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
  bottom: 0;
  width: 63%;
  padding: 10px 0;
  box-shadow: 0px 4px 40px rgba(78, 196, 154, 0.15) !important;
  border-radius: 10px;
  margin-bottom: 20px;
}
.total-bayar {
  font-weight: 600;
  font-size: 24px;
  line-height: 16px;
  color: #9c9c9c;
}
.pulsa-total {
  padding: 20px 50px;
  height: 122px;
}
.container {
  width: 90%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
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
  font-size: 40px;
  font-weight: 500 !important;
}
.pay-button {
  min-width: 0px;
  width: 250px;
  min-height: 60px;
  color: white;
  text-transform: none;
  font-size: 20px;
  font-weight: bold;
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
