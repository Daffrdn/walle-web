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
          <h2 class="pulsa">Paket Data</h2>
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
              <v-img
                v-show="tri"
                height="38px"
                contain
                src="/provider/tri.png"
              />
              <v-img
                v-show="smartfren"
                height="38px"
                contain
                src="/provider/smartfren.png"
              />
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
          Pilih Paket Data :
        </h2>

        <v-row class="d-flex justify-center">
          <!-- Product -->
          <v-col
            v-for="item in listPulsa.produk"
            v-show="product" 
            :key="item.id"
            cols="12"
            md="12"
            lg="6"
            ><v-card
              :class="[item.tersedia == false ? 'activeClass' : '']"
              class="detail-pulsa-nominal d-flex flex-column align-start justify-center pa-2 ma-1"
              height="120px"
              @click="saveParam(item)"
            >
              <span v-if="item.tersedia == false" class="empty ml-4 mt-2"
                >Maaf, saldo lagi habis
                <v-icon class="warning-icon ml-1" small color="red">
                  mdi-alert-circle-outline</v-icon
                >
              </span>
              <span class="mb-1 mt-5 ml-4">
                <span class="pulsa-rp font-weight-bold">Rp</span>
                <span class="pulsa-price font-weight-bold"
                  >{{ item.harga }}
                </span>
              </span>
              <p class="get-pulsa ml-4">
                {{ item.deskripsi }}
              </p>
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
          :disabled="this.number.length < 10"
          >Beli</v-btn
        >
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'NominalPaketData',

  data: () => ({
    kategori: '0',
    provider: '0',
    activeClass: 'disabled',
    number: '',
    total: '',
    totalShow: false,
    parameter: '',
    phoneRules: [
      (v) => v.length > 9 || 'Nomor terlalu pendek, minimal 10 karakter',
    ],
    phoneErr: false,
    product: false,
    // provider
    xl: false,
    tri: false,
    axis: false,
    telkomsel: false,
    indosat: false,
    smartfren: false,
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
      this.parameter = param
      this.total = param.harga
      // console.log(param.harga)
      // this.detail = this.items[index].id
    },
    handleClick(item) {
      console.log(item.id)
    },
    toPayment() {
      window.console.log(this.parameter)
      this.$store.commit('pulsa/setProduct', this.parameter)
      this.$router.push({ path: '/paketdata/' + this.parameter.id })
    },
    isPhoneValid() {
      const indosat = /^(\\+62|\\+0|0|62)8(57|56)[0-9]{0,9}$/
      const telkomsel =
        /^(\\+62|\\+0|0|62)8(52|53|11|12|13|21|22|51)[0-9]{0,9}$/
      const tri = /^(\\+62|\\+0|0|62)8(96|95|97|98|99)[0-9]{0,9}$/
      const xl = /^(\\+62|\\+0|0|62)8(18|19|59|77|78)[0-9]{0,9}$/
      const axis = /^(\\+62|\\+0|0|62)8(32|33|38)[0-9]{0,9}$/
      const smartfren =
        /^(\\+62|\\+0|0|62)8(81|82|83|84|85|86|86|88|89)[0-9]{0,9}$/
      if (indosat.test(this.number)) {
        // if true
        this.indosat = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 2,
        })
      } else if (telkomsel.test(this.number)) {
        this.telkomsel = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 6,
        })
      } else if (tri.test(this.number)) {
        this.tri = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 7,
        })
      } else if (xl.test(this.number)) {
        this.xl = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 8,
        })
      } else if (axis.test(this.number)) {
        this.axis = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 1,
        })
      } else if (smartfren.test(this.number)) {
        this.smartfren = true
        this.product = true
        this.fetchProduct({
          kategori: 2,
          provider: 4,
        })
      } else {
        // if false
        this.smartfren = false
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
.sub-title {
  color: rgba(67, 67, 67, 1);
  font-weight: 400;
  font-size: 16px;
}

.wrapper {
  margin: 0px 10% 4%;
  /* padding: 10px 10%; */
}
.empty {
  position: absolute;
  top: 0;
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
  position: relative;
}
.detail-pulsa-nominal:hover {
  border: 1px solid rgba(78, 196, 154, 0.15) !important;
  background: rgba(78, 196, 154, 0.15);
}

.detail-pulsa-nominal:focus {
  background: rgba(78, 196, 154, 0.1);
  box-shadow: 0px 4px 40px rgba(78, 196, 154, 0.06) !important;
  border: 1px solid rgba(78, 196, 154, 0.15) !important;
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
