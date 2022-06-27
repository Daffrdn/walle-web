<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-carousel
        cycle
        width="600"
        height="650"
        hide-delimiter-background
        show-arrows-on-hover
        class="d-flex justify-center"
        align="center"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          width="600"
          class="mx-auto"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <img class="mx-auto" width="400" :src="item.src" />
          <h1 align="center">{{ item.title }}</h1>
          <br />
          <div align="center">
            <span align="center">{{ item.text }}</span
            ><br />
            <span align="center">{{ item.text1 }}</span
            ><br />
            <span align="center">{{ item.text2 }}</span>
          </div>
          <br />
          <div>
            <v-btn dark color="#4EC49A" nuxt to="/login"> Login </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
      <!-- <v-btn color="primary" nuxt to="/beranda"> Homepage </v-btn> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      items: [
        {
          src: '/1-illustrasi.png',
          title: 'Selamat Datang Di Wall E',
          text: 'Aplikasi yang menawarkan',
          text1: 'kemudahan bertransaksi pulsa,',
          text2: 'Paket data dan Voucher Game',
        },
        {
          src: '/2-illustrasi.png',
          title: 'Pembayaran',
          text: 'Pembayaran kebih mudah dengan',
          text1: 'cukup satu aplikasi',
        },
        {
          src: '/3-illustras.png',
          title: 'Pembayaran',
          text: 'Memberikaan harga yang terjamin pas',
          text1: 'dan terjangkau bagi semua kalangan',
          to: '/beranda',
        },
      ],
    }
  },
}
</script>

<style scoped>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

html {
  background-color: white;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-color: #f8fefc;
}

h1,
h2,
h5,
h4,
p,
h3,
h2 {
  color: #4ec49a;
}

span {
  color: #27624d;
.rounded-card{
  border-radius:50px;
}
</style>
