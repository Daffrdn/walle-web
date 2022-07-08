<template>
<v-card
    class="mx-auto mt-5 container"
    max-width="1200"
    elevation="2"
  >
  <div class="wrapper">
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
        class="mt-5 btn" 
        color="#4EC49A"
        type="submit"
      > Masuk </v-btn><br>
      <span class="mt-3 d-flex justify-center grey--text" >Atau</span><br>
  </form>
      <v-btn 
      block 
      dark 
      x-large 
      class="mt-3 btn" 
      outlined color="#4EC49A"
      @click="registration"
    > Daftar </v-btn>
  </v-card>
  <br><br>
  </div>
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
      error: null,
      message: 'Coba di ingat-ingat lagi password atau emailmu ada yang salah nih :('
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
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
             this.$router.push('/beranda');
          } catch(e) {
            this.error = this.message
          }
        },
  }
}
</script>

<style scoped>
h4 {
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
.v-text-field--outlined >>> fieldset {
  box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05);
  border: 1px solid #4ec49a;
  border-radius: 10px;
}
.v-text-field >>> input {
  color: #4ec49a !important;
}

</style>