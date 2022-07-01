<template>
<div>
    <v-row>
    <v-col
          v-for="(item, i) in historyList"
          :key="i"
          cols="12"
        >
        <v-card  
            class="mx-auto rounded-card"
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
                    <h4>{{ item.title }}</h4>
                        <v-spacer></v-spacer>
                    <h4 class="yellow--text">{{ item.harga }}</h4>
                </v-card-title>
                <v-card-subtitle>{{ item.tanggal }}</v-card-subtitle>
                <v-card-text>
                    <h3 class="black--text">{{ item.via }}</h3>
                </v-card-text>
            </v-card>
            </v-card>
        </v-card>
    </v-col>
    </v-row>
    <br>
    <v-row>
      <v-col>
        <span>Page {{ page }} of {{ pageSize }}</span>
      </v-col>
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
        pageSize: 3,
        listCount: 0,
		historyList: [],
        list: [
            {
            title: 'Pulsa ( 20000 )',
            harga: 'Rp 21.000',
            tanggal: '16 Jun 2022, 12:30 WIB',
            via: 'OVO',
            },
            {
            title: 'Paket Data ( 50000 )',
            harga: 'Rp 51.000',
            tanggal: '16 Jun 2022, 12:30 WIB',
            via: 'GoPay',
            },
            {
            title: 'Pulsa ( 10000 )',
            harga: 'Rp 10.000',
            tanggal: '16 Jun 2022, 12:30 WIB',
            via: 'OVO',
            },
            {
            title: 'Steam Games ( 50000 )',
            harga: 'Rp 51.000',
            tanggal: '16 Jun 2022, 12:30 WIB',
            via: 'BCA',
            },
        ],
      };
    },
  computed: {
    pages() {
      const _this = this;
      if (_this.pageSize == null || _this.listCount == null) return 0;
      return Math.ceil(_this.listCount / _this.pageSize);
    },
  },
    created() {
    const _this = this;
    _this.initPage();
  },
  methods: {
    initPage () {
      const _this = this;
      _this.listCount = _this.list.length;
      if (_this.listCount < _this.pageSize) {
        _this.historyList = _this.list;
      } else {
        _this.historyList = _this.list.slice(0, _this.pageSize);
      }
    },
    updatePage (pageIndex) {
      const _this = this;
      const _start = (pageIndex - 1) * _this.pageSize;
      const _end = pageIndex * _this.pageSize;
      _this.historyList = _this.list.slice(_start, _end);
      _this.page = pageIndex;
    },
  },
}
</script>

<style scoped>
.rounded-card{
  border-radius: 15px;
}
</style>