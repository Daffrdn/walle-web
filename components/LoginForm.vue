<template>
<v-card
    class="mx-auto mt-5 rounded-card"
    max-width="1200"
    elevation="2"
  ><br>
  <v-card
  class="mx-auto mt-3"
  max-width="1100"
  elevation="0">
    <v-card-title>
        <v-btn icon @click="back">
            <v-icon x-large>
            mdi-chevron-left
            </v-icon>
        </v-btn>
            <h3>Login</h3>
    </v-card-title>
    <div class="d-flex justify-center">
      <img src="../static/1 51.png">
    </div><br>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <Notification v-if="error" :message="error"/>
  <form method="post" @submit.prevent="login">
    <v-text-field
      v-model="email"
      label="Email"
      type="Email"
      single-line
      outlined
      required
      class="mt-3 input"
      color="#4EC49A"
      ></v-text-field>
      <v-text-field
      v-model="password"
      label="Password"
      single-line
      outlined
      required
      class="input mt-4"
      color="#4EC49A"
      :type="show1 ? 'text' : 'password'"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="show1 = !show1"
      ></v-text-field>
      <NuxtLink to="/lupa-password">
      <h4 class="d-flex flex-row-reverse">Lupa Password ?</h4>
      </NuxtLink>
      <v-btn 
        block 
        dark 
        x-large 
        class="mt-5" 
        color="#4EC49A"
        type="submit"
      > Masuk </v-btn><br>
      <span class="mt-3 d-flex justify-center grey--text" >Atau</span><br>
  </form>
        <v-btn 
            block 
            dark 
            x-large 
            class="mt-3" 
            outlined color="#4EC49A"
            @click="registration"> Daftar </v-btn>
  </v-card>
  <br><br>
</v-card>
</template>

<script>
import Notification from './Notification'

export default {
  components: {
    Notification,
  },
    data: () => ({
      show1: false,
      email: '',
      password: '',
      error: null
    }),
    methods: {
      registration() {
        this.$router.push('/daftar')
      },
      back() {
        this.$router.push('/')
      },
      // login() {
      //     this.$store.dispatch('authentication/fetchLogin',{
      //       email: this.email,
      //       password: this.password,
      //     })
      //   } 
        async login() {
        try {
          await this.$axios.post('/user/login', {
            email: this.email,
            password: this.password
          })
            this.$router.push('/beranda')
          } catch(e) {
            this.error = e.response.data.pesan
          }
        },
  }
}
</script>

<style scoped>
h4 {
  color: #4EC49A;
}
.rounded-card{
  border-radius:50px;
}
</style>