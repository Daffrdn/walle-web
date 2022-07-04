<template>
<div class="bg">
<br>
<v-card
    class="mx-auto mt-5 container"
    max-width="1200"
    elevation="2"
  ><br><br><br>
  <div class="wrapper">
  <v-card
  class="mx-auto mt-3"
  max-width="1100"
  elevation="0">
    <v-card-title class="d-flex justify-center">
        <h3>Password Berhasil Diperbaharui</h3>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <br><br><br>
  <img class="mx-auto d-flex justify-center" width="100" src="/checklist.png">
  <br><br><br>
    <v-btn 
      block 
      dark 
      x-large 
      class="mt-5 btn" 
      color="#4EC49A"
      @click="next"> 
    Login
    </v-btn>
    <br><br>
  </v-card>
  <br><br>
  <br><br>
  </div>
</v-card>
</div>
</template>

<script>
export default {
    name: 'SuccessPasswwordpage',
    middleware: 'guest',
    data: () => ({
    }),
    methods: {
      next() {
        this.$router.push('/login')
      }
    },
  }
</script>

<style scoped>
.rounded-card{
  border-radius:50px;
}

h3 {
  color: #4EC49A;
}

.wrapper {
  margin: 0px 10% 4%;
}

.container {
  width: 80%;
  background-color: white;
  margin: 2% auto;
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05) !important;
  border-radius: 10px;
}
</style>