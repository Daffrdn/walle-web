<template>
  <v-card class="container">
    <div class="wrapper">
      <v-card-title class="title">
        <v-btn icon @click="back">
          <v-icon x-large color="rgba(59, 23, 36, 1)">
            mdi-chevron-left
          </v-icon>
        </v-btn>
        <h2 class="pembayaran">Pembayaran</h2>
      </v-card-title>
      <div class="detail-wrapper">
        <h2 class="sub-title mb-6">Detail Pembayaran</h2>
        <div class="detail-cost">
          <v-row class="d-flex justify-space-between ma-0">
            <span>Nama Produk</span>
            <span>{{ list.deskripsi }}</span>
          </v-row>
          <v-row class="d-flex justify-space-between ma-0 middle">
            <span>Harga</span>
            <span>Rp.{{ list.nominal }}</span>
          </v-row>
          <v-row class="d-flex justify-space-between ma-0">
            <span>Biaya Admin</span>
            <span>Rp. {{ list.harga - list.nominal }}</span>
          </v-row>
          <div class="line"></div>
          <!-- Payment -->
          <span class="sub-title">Pilih Metode Pembayaran</span>
          <form methods="post" class="form mt-3" @submit.prevent="transaksi">
            <div class="inputGroup">
              <input id="gopay" name="method" type="radio" />
              <label for="gopay">
                <img src="/payment/gopay.png" width="30px" alt="gopay" />

                <span class="ml-2 payment">GOPAY</span>
              </label>
            </div>
            <div class="inputGroup">
              <input id="bca" v-model="bank" name="method" type="radio" value="bca"/>
              <label for="bca">
                <img src="/payment/ovo.png" width="35px" alt="ovo" />
                <span class="ml-2 payment">BCA</span>
              </label>
            </div>
          
            <!-- End of Payment -->

            <div class="wrapper-total">
              <v-row class="total-row d-flex align-center justify-space-between">
                <span>
                  <span class="font-weight-regular total-bayar">Total Bayar</span>
                  <p class="total font-weight-bold ma-0 mt-1">Rp. {{ list.harga }}</p>
                </span>
                <v-btn color="#4EC49A" class="pay-button mb-1" x-large type="submit"
                  >Bayar Sekarang</v-btn
                >
              </v-row>
            </div>
          </form>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PaymentMethodPulsa',
 
  data: () => ({
    radioGroup: 1,
    activeClass: '',
    bank: '',

  }),
  computed: {
    param() {
      return this.$route.params.id
    },
    list() {
      return this.$store.state.pulsa.listProduct
    },
  
  },
  methods: {
    back() {
      this.$router.push('/pulsa')
    },
    async transaksi(){
      if(!this.bank) {
        await this.$axios.post('/transaksi/ewallet',
        {
          "user_id": parseInt(this.$auth.user.id),
          "produk_id": parseInt(this.$route.params.id),
        },)
        this.$router.push('/pulsa/'+ this.$route.params.id + '/pembayaran-ewallet')
      } else {
        await this.$axios.post('/transaksi/bank',
        {
          "user_id": parseInt(this.$auth.user.id),
          "produk_id": parseInt(this.$route.params.id),
          "bank": this.bank
        },)
        this.$router.push('/pulsa/'+ this.$route.params.id + '/pembayaran-bank')
      }
    },
  }
}
</script>

<style scoped>
* {
  color: rgba(67, 67, 67, 1);
}
/* form */
.inputGroup {
  background-color: #ffff;
  display: block;
  margin: 10px 0;
  position: relative;
  border-radius: 10px;
}
.inputGroup:hover {
  background: rgba(78, 196, 154, 0.1);
}
label img {
  float: left;
}

.detail-cost span {
  font-weight: 400;
  font-size: 16px;
}
label {
  padding: 18px 30px;
  display: block;
  text-align: left;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  border-radius: 10px;
  overflow: hidden;
}
.payment {
  color: #434343;
  float: left;
  margin-top: 6px;
}
label:before {
  width: 100%;
  height: 10px;
  border-radius: 50%;
  content: '';
  box-shadow: 0px 4px 20px;
  background-color: rgba(78, 196, 154, 0.2);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}

label:after {
  width: 32px;
  height: 32px;
  content: '';
  border: 2px solid #d1d7dc;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 1.5px 2px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}

input:checked ~ label {
  color: #737373;
}
input:checked ~ label:before {
  transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 1;
}

input:checked ~ label:after {
  background-color: #4ec49a;
  border-color: #4ec49a;
}

input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  cursor: pointer;
  visibility: hidden;
}

.v-radio {
  height: 61px;
  padding: 8px 20px;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05);
  border-radius: 10px;
}
/* end of form */
.container {
  width: 90%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
  padding-bottom: 100px;
}
.wrapper {
  margin: 0px 10% 4%;
}
.title {
  margin: 40px 0 40px -0.7%;
  padding: 0 !important;
}
.pembayaran {
  font-size: 16px;
  margin-left: 1.5%;
  color: rgba(59, 23, 36, 1);
  font-weight: 400;
}
.detail-wrapper {
  /* width: 80%; */
  margin: 0 auto;
  font-size: 24px;
}
.middle {
  margin: 15px 0 !important;
}
.sub-title {
  font-size: 16px !important;
  font-weight: bold !important;
}

.line {
  width: 100%;
  margin: 30px 0;
  height: 2px;
  background-color: #d9d9d9;
}
.wrapper-total {
  margin-top: 50px;
  width: 100%;
  background-color: rgba(248, 254, 252, 1);
  border-radius: 10px;
}
.total-row {
  padding: 10px 40px;
}
.total {
  color: #4ec49a;
  font-weight: 700;
  font-size: 32px;
}
.total-bayar {
  font-weight: 500;
  font-size: 16px;
  color: #434343;
}

.pay-button {
  text-transform: none;
  color: white;
  font-weight: normal;
  font-size: 16px;
  box-shadow: none !important;
  border-radius: 10px;
  padding: 30px !important;
}
@media only screen and (max-width: 600px) {
  .pay-button {
    width: 150px;
  }
}
</style>