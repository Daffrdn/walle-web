<template>
  <div class="bg-admin">
    <br /><br />
    <v-card class="mx-auto title" width="1278px" elevation="1"
      ><br />
      <v-card-title class="ml-16">
        <v-btn icon x-large @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Edit Produk Pulsa
      </v-card-title>
      <v-card class="mx-auto" width="1000px" elevation="0">
        <v-card-text>
          <v-form>
            <span>Provider</span>
            <v-text-field
              v-model="posts.provider"
              disabled
              outlined
              color="#B0466C"
              single-line
              required
              label="Provider"
              class="mb-6 autocomplete"
            ></v-text-field>
            <span>Nominal</span>
            <v-text-field
              v-model="posts.nominal"
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              outlined
              color="#B0466C"
              single-line
              required
              label="Nominal produk pulsa yang akan dijual"
              class="mb-6 autocomplete"
            ></v-text-field>
            <span>Harga</span>
            <v-text-field
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              v-model="posts.harga"
              outlined
              color="#B0466C"
              single-line
              label="Harga produk pulsa yang akan dijual"
              class="mb-6 autocomplete"
              prefix="Rp "
            ></v-text-field>
            <span>Nama Produk </span>
            <v-text-field
              v-model="posts.nama"
              outlined
              color="#B0466C"
              single-line
              label="contoh : Pulsa Axis 50k"
              class="mb-6 autocomplete"
            ></v-text-field>

            <v-btn
              block
              color="#B0466C"
              x-large
              class="submit-button mt-10"
              type="submit"
              @click="editData"
              :disabled="
                this.posts.nominal == null ||
                this.posts.nominal == '' ||
                this.posts.harga == null ||
                this.posts.harga == '' ||
                this.posts.nama == null ||
                this.posts.nama == ''
              "
            >
              Edit
            </v-btn>
          </v-form>
        </v-card-text>
        <!-- {{ detailProduct.produk.nama }} -->
      </v-card>

      <!-- <br /><br /><br /><br />
      <br /><br /><br /><br />
      <br /><br /><br /><br /> -->
    </v-card>
    <!-- DIALOG -->
    <v-dialog class="" v-model="successful" width="400">
      <v-card class="dialog d-flex flex-column">
        <div class="dialog-img d-flex mt-10 mx-auto">
          <img class="" height="150px" src="~/static/admin/berhasil.png" />
        </div>
        <div class="dialog-text my-5 mx-auto">
          <p>Data berhasil Dirubah</p>
        </div>
        <v-card-actions class="mx-auto">
          <v-btn
            x-large
            color="#B0466C"
            class="button-dialog"
            @click="closeDialog"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AdminTambahPulsa',
  data: () => ({
    providers: [
      { id: 1, name: 'Axis' },
      { id: 2, name: 'Indosat' },
      { id: 4, name: 'Smartfren' },
      { id: 6, name: 'Telkomsel' },
      { id: 7, name: 'Tri' },
      { id: 8, name: 'XL' },
    ],
    posts: {
      provider: null,
      nominal: null,
      harga: null,
      nama: null,
    },
    successful: false,
  }),
  // computed: {
  //   listProduct() {
  //     return this.fetchProduct
  //   },
  // },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    fetchProduct(id) {
      id = this.$route.params.id
      this.$axios
        .get(`https://bearuang.me/produk/${id}`, {
          headers: {
            Authorization: this.$auth.$storage._state['_token.local'],
          },
        })
        .then((res) => {
          this.posts.provider = res.data.produk.provider.nama
          this.posts.nama = res.data.produk.nama
          this.posts.harga = res.data.produk.harga
          this.posts.nominal = res.data.produk.nominal
        })
    },
    back() {
      this.$router.push('/admin/tambah-produk/pulsa')
    },

    async editData(e, id) {
      e.preventDefault()
      id = this.$route.params.id

      await this.$axios.put(
        `/produk/${id}`,
        {
          nama: this.posts.nama,
          nominal: parseInt(this.posts.nominal),
          harga: parseInt(this.posts.harga),
        },

        {
          headers: {
            Authorization: this.$auth.$storage._state['_token.local'],
          },
        }
      )
      this.successful = true
      this.fetchProduct()
    },
    closeDialog() {
      this.successful = false
      this.$router.push('/admin/tambah-produk/pulsa')
    },
  },
}
</script>

<style scoped>
.title {
  position: relative;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
}

span {
  width: 284px;
  height: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: #434343;
}

.v-card {
  padding-bottom: 40px;
}
.v-text-field {
  border-radius: 10px;
}
.autocomplete {
  box-sizing: border-box;
  height: 56px;
  /* border: 1px solid #c44e78; */
}
.v-text-field--outlined >>> fieldset {
  border: 1px solid #c44e78;
}
.submit-button {
  border-radius: 10px;
  text-transform: none;
  color: white;
  font-weight: 700;
}

.theme--light.v-btn.v-btn--disabled {
  background-color: #d683a1 !important;
  color: rgba(255, 255, 255, 0.5) !important;
}
.v-dialog {
  box-shadow: none !important;
}
.dialog {
  border-radius: 10px !important;
}
.dialog-text {
  color: #434343;
}
.button-dialog {
  color: white;
}
</style>
