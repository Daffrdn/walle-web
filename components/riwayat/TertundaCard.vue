<template>
  <div>
    <!-- {{listTertunda}} -->
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
                <h4 class="yellow--text">Rp. {{ item.produk.harga }}</h4>
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
          :total-visible="8"
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
      pageSize: 3,
      listCount: 0,
      historyList: [],
    }
  },
  computed: {
    pages() {
      const _this = this
      if (_this.pageSize == null || _this.listCount == null) return 0
      return Math.ceil(_this.listCount / _this.pageSize)
    },
    listTertunda() {
      return this.$store.state.transaction.tertunda
    },
  },
  mounted() {
    this.fetchTertunda({})
  },
  created() {
    const _this = this
    _this.initPage()
  },
  methods: {
    initPage() {
      const _this = this
      _this.listCount = _this.listTertunda.transaksi.length
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.listTertunda.transaksi
      } else {
        _this.historyList = _this.listTertunda.transaksi.slice(
          0,
          _this.pageSize
        )
      }
    },
    updatePage(pageIndex) {
      const _this = this
      const _start = (pageIndex - 1) * _this.pageSize
      const _end = pageIndex * _this.pageSize
      _this.historyList = _this.listTertunda.transaksi.slice(_start, _end)
      _this.page = pageIndex
    },
    fetchTertunda() {
      this.$store.dispatch('transaction/fetchTertunda', {})
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
