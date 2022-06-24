<template>
<div class="bg">
<br>
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
            <h2>Lupa Password</h2>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <br><br><br>
  <Notification v-if="error" :message="error"/>
  <form method="post" @submit.prevent="verifikasi">
  <h3 color="#4EC49A">Email</h3>
    <v-text-field
      v-model="email"
      label="Masukkan Email"
      single-line
      outlined
      required
      type="email"
      class="mt-3"
      color="#4EC49A"
      ></v-text-field>
      <v-btn 
        block 
        dark 
        x-large 
        type="submit"
        class="mt-5" 
        color="#4EC49A"
        > 
      Selanjutnya
      </v-btn>
    <br>
  </form>
  </v-card>
  <br><br><br><br>
  <br><br><br><br>
</v-card>
</div>
</template>

<script>
import Notification from '~/components/Notification'
export default {
    name: 'LupaPasswwordpage',
    components:{
      Notification,
    },
    data: () => ({
      email: "",
      error: null,
    }),
    methods: {
      async verifikasi() {
      try {
        await this.$axios.post('/user/reset', {
          email: this.email,
        })
        // await this.$axios.post('/user/reset/update', {
        //   email: this.email,
        // })
        this.$router.push('/lupa-password/new-password')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
      back() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
.rounded-card{
  border-radius:50px;
}
</style>