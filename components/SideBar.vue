<template>
<div>
<v-card
  color="#F8FEFC"
  max-width="350"
  class="mx-auto mt-5 ml-5"
  elevation="0"
>
  <v-card
  color="#F8FEFC"
  max-width="250"
  class="mx-auto mt-5"
  elevation="0"
  >
    <v-card-title>
      <img src="../static/1 51.png" width="150">
    </v-card-title>
    <br><br>
  </v-card>

  <v-card
  color="#F8FEFC"
  max-width="300"
  elevation="0"
  class="mx-auto"
  >
  <v-row>
    <v-btn
      elevation="0"
      x-large
      color="white"
      plain
      class="ml-5 rounded-card"
      @click="beranda"
    >
      <v-img
          width="20"
          alt=""
          src="/icon-beranda.png"
      ></v-img>
      <h4 class="ml-5">Beranda</h4>
    </v-btn>
    <v-btn
      elevation="0"
      x-large
      plain
      color="white"
      class="mt-3 ml-5 rounded-card"
      @click="riwayat"
    >
      <v-img
          width="20"
          alt=""
          src="/icon-history.png"
      ></v-img>
      <h4 class="ml-5">History</h4>
    </v-btn>
    <v-btn
      plain
      elevation="0"
      x-large
      color="white"
      class="mt-3 ml-5 rounded-card"
      @click="akun"
    >
      <v-img
          width="20"
          alt=""
          src="/icon-akun.png"
      ></v-img>
      <h4 class="ml-5">Akun</h4>
    </v-btn>
  </v-row>
  </v-card>
</v-card>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    akun(){
      this.$router.push('/akun')
    },
    riwayat(){
      this.$router.push('/riwayat')
    },
    beranda(){
      this.$router.push('/beranda')
    }
  }
}
</script>

<style scoped>
.rounded-card{
  border-radius: 50px;
}

h4 {
  color: #4EC49A;
}
</style>