<template>
  <div class="bg-admin">
    <br /><br />

    <v-card class="mx-auto title" width="1278px" elevation="1"
      ><br />
      <v-card-title class="ml-16">
        <v-btn icon x-large @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Produk Voucher Game
      </v-card-title>

      <v-card class="mx-auto wrapper" width="90%" elevation="0">
        <div class="my-5 mx-16">
          <v-row class="justify-space-between">
            <v-col md="4">
              <v-btn
                large
                class="button-tambah"
                @click="toTambah"
                color="#c44e78"
                ><v-icon size="28">mdi-plus </v-icon> Tambah Produk</v-btn
              ></v-col
            >

            <v-col md="5">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                outlined
                label="Search"
                single-line
                class="textfield"
                color="#EDCAD7"
                rounded
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <!-- TABLE -->

          <!-- TABLE -->
          <v-data-table
            :headers="headers"
            :page.sync="page"
            :items="listProduct.produk"
            :items-per-page="itemsPerPage"
            class="tables mx-1 my-5"
            align="center"
            label="search"
            :search="search"
            hide-default-footer
            @page-count="pageCount = $event"
          >
            <template v-slot:item.aksi="{ item }">
              <div class="d-flex justify-center">
                <v-btn
                  class="button-action mr-1"
                  @click="toEdit(item)"
                  color="#4EC49A"
                >
                  <v-icon dense color="white"> mdi-square-edit-outline </v-icon>
                </v-btn>
                <v-btn
                  class="button-action ml-1"
                  @click="deleteItem(item)"
                  color="#FF4D4D"
                >
                  <v-icon dense color="white"> mdi-trash-can-outline </v-icon>
                </v-btn>
              </div>
            </template>
          </v-data-table>
          <v-row class="mt-5 mx-1">
            <!-- <v-col> -->
            <!-- <p class="pagination-info my-2">
                Menampilkan {{ page }} s/d {{ pageCount }} data
              </p> -->
            <!-- </v-col> -->
            <v-col class="d-flex justify-end">
              <v-pagination
                v-model="page"
                :length="pageCount"
                color="#c44e78"
              ></v-pagination>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-card>
    <v-dialog v-model="dialogDelete" max-width="350px">
      <v-card class="pt-2 pb-3 px-3">
        <v-card-title class="dialog-text"
          >Yakin ingin menghapus produk ini?</v-card-title
        >
        <br />
        <v-card-actions class="d-flex justify-space-between">
          <v-btn color="red darken-1" @click="closeDialogDelete" text
            >Cancel</v-btn
          >
          <v-btn color="blue darken-1" class="" @click="deleteItemConfirm" text
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'AdminTablePulsa',
  data: () => ({
    dialogDelete: false,
    search: '',
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
    headers: [
      {
        text: ' ID ',
        align: 'center',
        sortable: false,
        value: 'id',
      },
      {
        text: 'Jenis Produk',
        value: 'kategori.nama',
        align: 'center',
        sortable: false,
      },
      {
        text: 'Nama',
        value: 'provider.nama',
        align: 'center',
      },
      { text: 'Nominal', value: 'nominal', align: 'center' },
      { text: 'Harga', value: 'harga', align: 'center', sortable: false },
      { text: 'Aksi', value: 'aksi', align: 'center', sortable: false },
    ],
  }),

  computed: {
    listProduct() {
      return this.$store.state.productadmin.listProduct
    },
  },
  mounted() {
    this.fetchProduct({
      kategori: '3',
    })
  },
  methods: {
    fetchProduct(kategori) {
      this.$store.dispatch('productadmin/fetchProduct', kategori)
    },
    back() {
      this.$router.push('/admin/tambah-produk')
    },
    toTambah() {
      this.$router.push('voucher/tambah')
    },
    toEdit(item) {
      this.$router.push({ path: 'voucher/' + item.id })
    },
    deleteItem(item) {
      this.toDeleteId = item.id
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
      await this.$axios.delete(`/produk/${this.toDeleteId}`, {
        headers: {
          Authorization: this.$auth.$storage._state['_token.local'],
        },
      })
      this.fetchProduct({
        kategori: '3',
      })
      this.dialogDelete = false
    },
    closeDialogDelete() {
      this.dialogDelete = false
    },
  },
}
</script>

<style scoped>
.title {
  background: #ffffff;
  border-radius: 10px;
  padding-bottom: 60px;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
}
.button-tambah {
  color: white;
  border-radius: 5px;
  text-transform: none;
}
.v-text-field--outlined >>> fieldset {
  border: 1px solid #edcad7;
}
.wrapper {
  border-radius: 10px;
  border: 1px solid #edcad7;
}
.textfield {
  background: #ffffff;
  height: 42px;
}
.tables {
  /* background: #f9edf2; */
  border: 1px solid #edcad7;
  border-radius: none !important;
}
.button-action {
  min-width: 42px !important;
  max-width: 36px !important;
}
.pagination-info {
  color: #9c9c9c;
  font-size: 16px;
}

.dialog-text {
  font-size: 16px !important;
}
.v-data-table ::v-deep th {
  font-weight: bold !important;
  font-size: 16px !important;
}
.v-data-table >>> td {
  font-size: 16px !important;
}
.v-data-table >>> tr:nth-of-type(even) {
  background-color: #f9edf2 !important;
}
.v-data-table >>> tr:nth-of-type(odd) {
  background-color: #ffff !important;
}
</style>
