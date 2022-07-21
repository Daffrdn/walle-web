<template>
  <div>
    <!-- Header -->
    <header class="">
      <div class="container header">
        <div class="d-flex justify-space-between mr-16">
          <div class="px-4">
            <a href="#home"
              ><img
                src="/landingpage/header-logo.svg"
                width="120px"
                class="ml-10"
                alt=""
            /></a>
          </div>
          <div class="header-navigation align-self-center mr-16">
            <a href="#home" class="px-4 py-2 mx-4">Home</a>
            <a href="#fitur" class="px-4 py-2 mx-4">Fitur</a>
            <a href="#benefit" class="px-4 py-2 mx-4">Benefit</a>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
    <!-- Hero Section -->
    <section id="home" class="">
      <div class="container">
        <div class="d-flex flex-wrap">
          <div class="hero-title-wrapper pl-16 align-self-center">
            <h1 class="hero-title font-weight-regular mb-8">
              Selamat Datang di
              <span class="hero-title-walle font-weight-bold">WALL E</span>
            </h1>
            <div class="hero-detail mb-16">
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Harga terjangkau bagi semua kalangan
                </span>
              </p>
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Kemudahan dalam bertransaksi
                </span>
              </p>
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Pembayaran lebih mudah dengan satu aplikasi
                </span>
              </p>
            </div>

            <div class="d-flex justify-start">
              <v-btn
                class="hero-btn-login"
                width="232px"
                height="48px"
                color="#009232"
                @click="toLogin"
                >Login</v-btn
              >
              <v-btn
                class="hero-btn-daftar ml-16"
                width="232px"
                height="48px"
                color="#ffff"
                @click="toDaftar"
                >Daftar</v-btn
              >
            </div>
          </div>
          <div class="hero-img-wrapper px-4 justify-end">
            <div class="mt-10">
              <v-img
                class="mx-auto"
                src="/landingpage/hero-img.png"
                width="60%"
                contain
              ></v-img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Fitur Section  -->
    <section id="fitur">
      <div class="container">
        <p class="fitur-title text-center">Fitur</p>
        <div class="d-flex flex-wrap justify-center">
          <v-card class="fitur-card d-flex flex-column">
            <div class="fitur-card-circle ma-auto d-flex">
              <img
                class="ma-auto"
                src="/landingpage/fitur-pulsa.svg"
                width="40px"
              />
            </div>
            <p class="mx-auto fitur-nama">Pulsa</p>
          </v-card>
          <v-card class="fitur-card d-flex flex-column mx-16">
            <div class="fitur-card-circle ma-auto d-flex">
              <img
                class="ma-auto"
                src="/landingpage/fitur-paketdata.svg"
                width="40px"
              />
            </div>
            <p class="mx-auto fitur-nama">Paket Data</p>
          </v-card>
          <v-card class="fitur-card d-flex flex-column">
            <div class="fitur-card-circle ma-auto d-flex">
              <img
                class="ma-auto"
                src="/landingpage/fitur-voucher.svg"
                width="40px"
              />
            </div>
            <p class="mx-auto fitur-nama">Voucher Game</p>
          </v-card>
        </div>
      </div>
    </section>
    <!-- Fitur Section END -->

    <!-- Benefit Section  -->
    <section id="benefit">
      <div class="container">
        <div class="d-flex flex-wrap">
          <div class="benefit-img-wrapper px-4 align-self-end">
            <div class="mt-10">
              <v-img
                class="mx-auto"
                src="/landingpage/benefit-img.png"
                width="60%"
                contain
              ></v-img>
            </div>
          </div>
          <div class="benefit-title-wrapper pl-16 align-self-center">
            <h1 class="benefit-title font-weight-regular mb-8">Benefit</h1>
            <div class="benefit-desc">
              <p class="">
                Dapatkan kemudahan bertransaksi pulsa,paket data dan voucher
                game hanya dengan satu aplikasi
              </p>
            </div>

            <div class="hero-detail mb-16">
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Harga terjangkau bagi semua kalangan
                </span>
              </p>
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Kemudahan dalam bertransaksi
                </span>
              </p>
              <p>
                <img src="/landingpage/check.svg" width="20px" /><span
                  class="ml-7"
                >
                  Pembayaran lebih mudah dengan satu aplikasi
                </span>
              </p>
            </div>

            <div class="d-flex justify-start">
              <v-btn
                class="hero-btn-login"
                width="50%"
                height="48px"
                color="#009232"
                @click="toDaftar"
                >Coba Sekarang</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Benefit Section END -->
    <!-- Footer -->
    <section id="footer">
      <footer class="">
        <div class="container d-flex flex-column align-self-center">
          <img
            src="/landingpage/footer-logo.png"
            class="mx-auto"
            width="117px"
            alt=""
          />
          <p class="footer-text mx-auto mt-2">
            Copyright © 2022 Wallet Electronic
          </p>
        </div>
      </footer>
    </section>
    <!-- Footer END -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: 'guest',
  data() {
    return {}
  },
  methods: {
    toLogin() {
      this.$router.push('/login')
    },
    toDaftar() {
      this.$router.push('/daftar')
    },
  },
}
</script>

<style scoped>
header {
  position: fixed;
  right: 0;
  left: 0;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  z-index: 99;
}
.header-navigation a {
  text-decoration: none;
  color: #161616;
  transition: 0.3s;
  font-weight: bold;
}
.header-navigation a:hover {
  color: #009232;
}
#home {
  padding-top: 9rem;
  padding-bottom: 12rem;
}
.hero-title-wrapper {
  width: 40%;
}
.hero-img-wrapper {
  width: 60%;
}
.hero-title {
  font-size: 60px;
  color: #161616;
}
.hero-title-walle {
  color: #009232;
}
.hero-detail {
  color: #707070;
}
.hero-detail p {
  position: relative;
}
.hero-detail img {
  bottom: 3.5px;
  position: absolute;
}
.hero-btn-login {
  border-radius: 100px;
  color: white;
  text-transform: none;
  font-weight: 700;
  box-shadow: none !important;
}
.hero-btn-daftar {
  border-radius: 100px;
  color: #009232;
  text-transform: none;
  font-weight: 700;
  border: 1px solid #009232 !important;
  box-shadow: none !important;
}
#fitur {
  background-color: #f7fbf8;
  padding-top: 5rem;
  padding-bottom: 12rem;
}
.fitur-title {
  padding-bottom: 5rem;
  font-weight: 500;
  font-size: 32px;
  color: #161616;
}
.fitur-card {
  width: 244px;
  height: 259px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 50px rgba(219, 219, 219, 0.05) !important;
  border-radius: 10px;
  transition: transform 0.3s;
}
.fitur-card:hover {
  transform: scale(1.2);
}
.fitur-card-circle {
  width: 137px;
  height: 137px;
  background-color: rgba(0, 146, 50, 0.1);
  border-radius: 100% !important;
}

.fitur-nama {
  color: #161616;
}
#benefit {
  padding-top: 9rem;
  padding-bottom: 12rem;
}
.benefit-img-wrapper {
  width: 50%;
}
.benefit-title-wrapper {
  width: 50%;
  color: #161616;
}
.benefit-title {
  font-weight: 500;
  font-size: 32px;
}
.benefit-desc {
  width: 460px;
}
#footer {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  background-color: #009232;
}
.footer-text {
  color: white;
}
</style>
