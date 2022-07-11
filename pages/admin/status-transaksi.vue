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
        :items="desserts"
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
          </div>
        </template>
        <template v-slot:item.tanggal="{ item }">
          <div class="blue--text">
            {{ item.tanggal }}
          </div>
        </template>
      </v-data-table>
    </v-card>
    <v-row class="mt-5">
      <v-col>
        <p>Menampilkan {{ page }} s/d {{ pageCount }} data</p>
      </v-col>
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
    itemsPerPage: 5,
    headers: [
      {
        text: 'Tanggal',
        align: 'center',
        sortable: false,
        value: 'tanggal',
      },
      { text: 'Provider', value: 'provider', align: 'center' },
      { text: 'Nominal', value: 'nominal', align: 'center' },
      { text: 'No.Telepon', value: 'notelepon', align: 'center' },
      { text: 'Harga', value: 'harga', align: 'center' },
      { text: 'Pembayaran', value: 'pembayaran', align: 'center' },
      { text: 'Status', value: 'status', align: 'center' },
    ],
    desserts: [],
  }),

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 19:25',
          provider: 'Indosat',
          nominal: '20.000',
          notelepon: '081234567890',
          harga: 'Rp. 20.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 21:00',
          provider: 'Telkomsel',
          nominal: '20.000',
          notelepon: '081234567809',
          harga: 'Rp. 20.000',
          pembayaran: 'Ovo',
          status: 'Gagal',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Gagal',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Gagal',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Sukses',
        },
        {
          tanggal: '09/06/2022 19:00',
          provider: 'Indosat',
          nominal: '10.000',
          notelepon: '081234567890',
          harga: 'Rp. 10.000',
          pembayaran: 'Gopay',
          status: 'Gagal',
        },
      ]
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
}
.tables {
  background: #f9edf2;
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
</style>
