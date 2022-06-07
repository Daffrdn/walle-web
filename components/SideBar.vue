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
      <v-img
        max-width=""
        alt=""
        src="/logo-web.png"
      ></v-img>

    </v-card-title>
  </v-card>

  <v-card
  color="#F8FEFC"
  max-width="300"
  elevation="0"
  class="mx-auto ml-5"
  >
  <v-row>
    <v-btn
      raised
      elevation="0"
      x-large
      color="white"
      class="ml-5"
    >
      <v-img
          width="20"
          alt=""
          src="/icon-beranda.png"
      ></v-img>
      <h4 class="ml-5">Beranda</h4>
    </v-btn>
    <v-btn
      plain
      elevation="0"
      x-large
      color="white"
      class="mt-3 ml-5"
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
      class="mt-3 ml-5"
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
}
</script>

<style>

</style>