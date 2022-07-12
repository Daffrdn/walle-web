<template>
  <div class="bg-admin">
    <br /><br />
    <v-card class="mx-auto title" width="1278px" elevation="1"
      ><br />
      <v-card-title class="ml-16">
        <v-btn icon x-large @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Tambah Produk Voucher Game
      </v-card-title>
      <v-card class="mx-auto" width="1000px" elevation="0">
        <v-card-text>
          <v-form>
            <span>Voucher</span>
            <v-autocomplete
              v-model="posts.provider_id"
              :items="providers"
              item-text="name"
              item-value="id"
              outlined
              color="#B0466C"
              single-line
              label="Pilih Voucher"
              class="mb-6 autocomplete"
            ></v-autocomplete>
            <span>Nominal</span>
            <v-text-field
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              v-model="posts.nominal"
              outlined
              color="#B0466C"
              single-line
              required
              label="Nominal produk voucher yang akan dijual"
              class="mb-6 autocomplete"
            ></v-text-field>
            <span>Harga</span>
            <v-text-field
              oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              v-model="posts.harga"
              outlined
              color="#B0466C"
              single-line
              label="Harga produk voucher yang akan dijual"
              class="mb-6 autocomplete"
              prefix="Rp "
            ></v-text-field>
            <span>Nama Produk</span>
            <v-text-field
              v-model="posts.nama"
              outlined
              color="#B0466C"
              single-line
              label="contoh : Steam 50000"
              class="mb-6 autocomplete"
            ></v-text-field>

            <v-btn
              block
              color="#B0466C"
              x-large
              class="submit-button mt-10"
              type="submit"
              @click="postData"
              :disabled="
                this.posts.provider_id == null ||
                this.posts.provider_id == '' ||
                this.posts.nominal == null ||
                this.posts.nominal == '' ||
                this.posts.harga == null ||
                this.posts.harga == '' ||
                this.posts.nama == null ||
                this.posts.nama == ''
              "
            >
              Tambah
            </v-btn>
          </v-form>
        </v-card-text>
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
          <p>Data berhasil Ditambahkan</p>
        </div>
        <v-card-actions class="mx-auto">
          <v-btn
            x-large
            color="#B0466C"
            class="button-dialog"
            @click="successful = false"
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
  name: 'AdminTambahVoucher',
  data: () => ({
    providers: [
      { id: 3, name: 'Google Play' },
      { id: 5, name: 'Steam' },
    ],
    posts: {
      kategori_id: 3,
      provider_id: null,
      nominal: null,
      harga: null,
      nama: null,
    },
    successful: false,
  }),
  methods: {
    back() {
      this.$router.push('/admin/tambah-produk/voucher')
    },
    emptyField() {
      this.posts.nama = null
      this.posts.nominal = null
      this.posts.harga = null
      this.posts.provider_id = null
    },
    async postData(e) {
      e.preventDefault()
      await this.$axios.post(
        '/produk',
        {
          nama: this.posts.nama,
          deskripsi: this.posts.nama,
          nominal: parseInt(this.posts.nominal),
          harga: parseInt(this.posts.harga),
          kategori_id: this.posts.kategori_id,
          provider_id: this.posts.provider_id,
        },
        {
          headers: {
            Authorization: this.$auth.$storage._state['_token.local'],
          },
        }
      )
      this.successful = true
      this.emptyField()
    },
  },
}
</script>

<style scoped>
.title {
  position: relative;
  background: #ffffff;
  border-radius: 10px;
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
