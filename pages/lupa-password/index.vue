<template>
<div class="bg">
<br>
<v-card
    class="mx-auto mt-5 container"
    max-width="1200"
    elevation="2"
  ><div class="wrapper">
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
        class="mt-5 btn" 
        color="#4EC49A"
        > 
      Selanjutnya
      </v-btn>
    <br>
  </form>
  </v-card>
  <br><br><br><br>
  <br><br><br><br>
  </div>
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
    middleware: 'guest',
    data: () => ({
      email: "",
      error: null,
    }),
    methods: {
      // verifikasi(){
      //   this.$store.commit('add_email', this.email);
      //   this.$router.push('/lupa-password/new-password')
      // },
      async verifikasi() {
      try {
        await this.$axios.post('/user/reset', {
          email: this.email,
        })
        this.$store.commit('add_email', this.email)
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