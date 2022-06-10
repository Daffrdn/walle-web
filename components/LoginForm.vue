<template>
<v-card
    class="mx-auto mt-5"
    max-width="1200"
    elevation="1"
    shaped
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
            <h2>Daftar</h2>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <h3 color="#4EC49A">Login</h3>
    <v-text-field
        label="Email"
        single-line
        outlined
        class="mt-3"
        color="#4EC49A"
        ></v-text-field>
        <v-text-field
        label="Password"
        single-line
        outlined
        class="mt-4"
        color="#4EC49A"
        :type="show1 ? 'text' : 'password'"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        ></v-text-field>
        <NuxtLink to="/lupa-password">
        <h4 class="d-flex flex-row-reverse greenaccent-2--text">Lupa Password ?</h4>
        </NuxtLink>
        <v-btn 
            block 
            dark 
            x-large 
            class="mt-5" 
            color="#4EC49A"
            @click="login"> Masuk </v-btn><br>
        <span class="mt-3 d-flex justify-center grey--text">Atau</span><br>
        
        <v-btn 
            block 
            dark 
            x-large 
            class="mt-3" 
            outlined color="#4EC49A"
            @click="registration"> Daftar </v-btn>
  </v-card>
  <br><br><br>
</v-card>
</template>

<script>
export default {
    data: () => ({
      show1: false,
    }),
    methods: {
      registration() {
        this.$router.push('/signup')
      },
      login() {
        this.$router.push('/beranda')
      },
      back() {
        this.$router.push('/')
      }
    }
  }
</script>

<style>

</style>