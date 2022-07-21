<template>
  <div class="">
    <v-row>
      <v-col
        v-for="item in historyList"
        :key="item.id"
        cols="12"
        exact
        router
        @click="detailTransaksi(item)"
      >
        <v-card
          class="mx-auto rounded-card card-riwayat"
          color="grey lighten-2"
          max-width="1130"
          elevation="0"
          outlined
        >
          <v-card
            class="mx-auto rounded-card"
            color="grey lighten-5"
            max-width="1130"
            elevation="0"
          >
            <v-card
              class="mx-auto"
              color="grey lighten-5"
              max-width="1120"
              elevation="0"
            >
              <v-card-title>
                <h4>{{ item.produk.deskripsi }}</h4>
                <v-spacer></v-spacer>
                <h4>{{ item.produk.harga }}</h4>
              </v-card-title>
              <v-card-subtitle>{{ item.waktu_transaksi }}</v-card-subtitle>
              <v-card-text>
                <h3 class="black--text">
                  {{ item.metode_pembayaran }} {{ item.bank }}
                </h3>
              </v-card-text>
            </v-card>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <v-row>
      <!-- <v-col>
        <span>Page {{ page }} of {{ listCount/3 }}</span>
      </v-col> -->
      <v-col class="d-flex justify-end">
        <v-pagination
          v-model="page"
          class="pagination mr-16"
          color="#4EC49A"
          :length="pages"
          @input="updatePage"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      filter: 'berhasil',
      pageSize: 3,
      listCount: 0,
      historyList: [],
      paramter: '',
    }
  },
  computed: {
    pages() {
      if (this.pageSize == null || this.listCount == null) return 0
      return Math.ceil(this.listCount / this.pageSize)
    },
    listBerhasil() {
      return this.$store.state.transaction.berhasil.transaksi
    },
  },
  mounted() {
    this.fetchBerhasil()
  },
  created() {
    this.initPage()
  },
  methods: {
    initPage() {
      this.listCount = this.listBerhasil.length
      if (this.listCount < this.pageSize) {
        this.historyList = this.listBerhasil
      } else {
        this.historyList = this.listBerhasil.slice(0, this.pageSize)
      }
    },
    updatePage(pageIndex) {
      const start = (pageIndex - 1) * this.pageSize
      const end = pageIndex * this.pageSize
      this.historyList = this.listBerhasil.slice(start, end)
      this.page = pageIndex
    },
    fetchBerhasil() {
      this.$store.dispatch('transaction/fetchBerhasil')
    },
    detailTransaksi(param) {
      this.parameter = param
      this.$store.commit('transaction/setAll', this.parameter)
      this.$router.push({ path: '/riwayat/' + this.parameter.id })
    },
  },
}
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
}
.card-riwayat {
  cursor: pointer;
}
</style>
