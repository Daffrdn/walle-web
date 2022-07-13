/* eslint-disable vue/valid-v-slot */
<template>
  <div>
    <br />
    <p>Status Transaksi</p>
    <v-card class="card">
      <v-card-title>
        <v-icon color="#D683A1" class="mr-2">mdi-update</v-icon>
        <span>Status Transaksi</span>
        <v-spacer></v-spacer>
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
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="listTransaksi.transaksi"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        sort-by="calories"
        class="elevation-0 tables"
        align="center"
        label="search"
        :search="search"
        hide-default-footer
        @page-count="pageCount = $event"
      >
        // eslint-disable-next-line vue/valid-v-slot
        <template v-slot:item.status="{ item }">
          <div>
            <v-chip
              :color="getColor(item.status)"
              dark
              label
              class="chips ml-5"
            >
              {{ item.status }}
            </v-chip>
            {{}}
          </div>
        </template>
        <template v-slot:item.tanggal="{}">
          <div class="blue--text">
            {{ item.tanggal }}
          </div>
        </template>
      </v-data-table>
    </v-card>
    <div class="sisasaldo d-flex justify-end">
      <span class="align-self-center mr-16">
        Sisa Saldo : Rp {{listSaldo.saldo[0].saldo+listSaldo.saldo[1].saldo+listSaldo.saldo[2].saldo}}
      </span>
    </div>
    <v-row class="mt-5">
      <v-col class="d-flex justify-end">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'StatusTransaksiPages',
  layout: 'admin',
  data: () => ({
    search: '',
    page: 1,
    pageCount: 0,
    itemsPerPage: 7,
    headers: [
      {
        text: 'Tanggal',
        align: 'center',
        sortable: false,
        value: 'waktu_transaksi',
      },
      { text: 'Produk', value: 'produk.nama', align: 'center' },
      { text: 'Nominal', value: 'produk.nominal', align: 'center' },
      { text: 'No.Telepon', value: 'nomor_handphone', align: 'center' },
      { text: 'Harga', value: 'produk.harga', align: 'center' },
      { text: 'Pembayaran', value: 'bank', align: 'center' },
      { text: 'Status', value: 'status_transaksi', align: 'center' },
    ],
    desserts: [],
  }),
  computed: {
    listTransaksi() {
      return this.$store.state.transaction.listAdmin
    },
    listSaldo() {
      return this.$store.state.saldo.listSaldo
    },
  },
  mounted() {
    this.fetchProduct()
  },

  methods: {
    fetchProduct() {
      this.$store.dispatch('transaction/listAdmin')
      this.$store.dispatch('saldo/fetchProduct')
    },
    getColor(status) {
      if (status === 'Sukses') return '#4EC49A'
      else if (status === 'Gagal') return '#FF1A1A'
      else return 'yellow'
    },
  },
}
</script>

<style scoped>
.textfield {
  background: #ffffff;
  border: 1px solid #edcad7;
  height: 42px;
}
.card {
  background: #f9edf2;
  border: 1px solid #edcad7;
  border-radius: 20px 20px 0px 0px;
  box-shadow: none !important;
}
.tables {
  border: 1px solid #edcad7;
}

span {
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #d683a1;
}

.chips {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
}

.v-data-table >>> th {
  background-color: #ffff !important;
}

.v-data-table >>> tr:nth-of-type(odd) {
  background-color: #f9edf2 !important;
}
.v-data-table >>> tr:nth-of-type(even) {
  background-color: #ffff !important;
}
.sisasaldo {
  height: 60px;
  background-image: linear-gradient(rgba(237, 202, 215, 1), #f9edf2);
}
.sisasaldo span {
  color: #c44e78;
  font-weight: 600;
}
</style>
