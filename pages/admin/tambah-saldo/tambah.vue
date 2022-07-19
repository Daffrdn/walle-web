<template>
  <div v-if="loggedInUser === 1" class="bg-admin">
    <br /><br />
    <v-card class="mx-auto title" width="1278px" elevation="1"
      ><br />
      <v-card-title class="ml-16">
        <v-btn icon x-large @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Tambah Saldo
      </v-card-title>
      <v-card class="mx-auto" width="1000px" elevation="0">
        <v-card-text>
          <v-form>
            <span>Provider</span>
            <v-autocomplete
              v-model="posts.kategori_id"
              :items="kategori"
              item-text="name"
              item-value="id"
              outlined
              color="#B0466C"
              single-line
              label="Pilih Kategori Saldo"
              class="mb-6 autocomplete"
            ></v-autocomplete>
            <span>Saldo</span>
            <v-autocomplete
              v-model="posts.saldo"
              :items="saldo"
              item-text="name"
              item-value="value"
              outlined
              color="#B0466C"
              single-line
              label="Pilih Kategori Saldo"
              class="mb-6 autocomplete"
            ></v-autocomplete>

            <v-btn
              block
              color="#B0466C"
              x-large
              class="submit-button mt-10"
              type="submit"
              @click="postData"
              :disabled="
                this.posts.saldo == null ||
                this.posts.saldo == '' ||
                this.posts.kategori_id == null ||
                this.posts.kategori_id == ''
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
  name: 'AdminTambahSaldo',
  middleware: ['admin', 'auth'],
  data: () => ({
    kategori: [
      { id: 1, name: 'Saldo Pulsa' },
      { id: 2, name: 'Saldo Kuota' },
      { id: 3, name: 'Saldo Voucher Game' },
    ],
    posts: {
      kategori_id: null,
      saldo: null,
    },
    saldo: [
      { value: 100000, name: 'Rp 100.000' },
      { value: 200000, name: 'Rp 200.000' },
      { value: 300000, name: 'Rp 300.000' },
      { value: 400000, name: 'Rp 400.000' },
      { value: 500000, name: 'Rp 500.000' },
      { value: 600000, name: 'Rp 600.000' },
      { value: 700000, name: 'Rp 700.000' },
      { value: 800000, name: 'Rp 800.000' },
      { value: 900000, name: 'Rp 900.000' },
      { value: 1000000, name: 'Rp 1.000.000' },
    ],

    successful: false,
  }),
  computed: {
    loggedInUser() {
      return this.$store.state.auth.user.role_id
    },
  },
  methods: {
    back() {
      this.$router.push('/admin/tambah-saldo')
    },
    emptyField() {
      this.posts.kategori_id = null
      this.posts.saldo = null
    },
    async postData(e) {
      e.preventDefault()
      await this.$axios.post(
        '/kategori/saldo',
        {
          kategori_id: this.posts.kategori_id,
          saldo: this.posts.saldo,
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
