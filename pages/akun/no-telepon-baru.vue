<template>
<div v-if="$store.state.auth.loggedIn">
  <v-container>
    <h4>No Handphone Baru</h4>
    <form method="put" @submit.prevent="changePhone">
      <div class="d-flex justify-space-between mt-4">
        <v-text-field
          v-model="gantiTelp"
          type="text"
          label="No Hp Baru"
          outlined
          color="black"
          single-line
        />
        <v-btn 
          dark
          color="#4EC49A"
          class="ml-5 btn rounded-cards"
          elevation="0"
          x-large
          type="submit"
        >
        Ganti No telepon
        </v-btn>
      </div>
    </form>
  </v-container>
</div>
</template>

<script>
export default {
  name: "NewEmailPages",
  layout: 'user',
  middleware: 'auth',
  data() {
    return {
      gantiTelp: ""
    }
  },
  computed: {
    loggedInUser(){
      return this.$store.state.auth.user
    },
  },
  methods: {
    async changePhone() {
      try {
        await this.$axios.put('/user', {
          nama: this.loggedInUser.nama,
          nomor_handphone: this.gantiTelp,
        })
        this.$router.push('/akun')
      } catch (e) {
        this.error = e.response.data.pesan
      }
    },
  }
}
</script>

<style scoped>
span {
  width: 352.67px;
  height: 35px;
}
.rounded-cards{
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