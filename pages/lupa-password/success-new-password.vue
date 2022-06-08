<template>
<div class="bg">
<br>
<v-card
    class="mx-auto mt-5"
    max-width="1200"
    elevation="1"
    shaped
  ><br><br><br>
  <v-card
  class="mx-auto mt-3"
  max-width="1100"
  elevation="0">
    <v-card-title class="d-flex justify-center">
        <h4>Password Berhasil Diperbaharui</h4>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <br><br>
  <img class="mx-auto d-flex justify-center" width="100" src="/checklist.png">
  <br><br>
    <v-btn 
        block 
        dark 
        x-large 
        class="mt-5" 
        color="#4EC49A"
        @click="next"> 
    Login
    </v-btn>
    <br><br><br>
  </v-card>
  <br><br>
  <br><br>
</v-card>
</div>
</template>

<script>
export default {
    name: 'SuccessPasswwordpage',
    data: () => ({
    }),
    methods: {
      next() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style>

</style>