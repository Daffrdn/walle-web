<template>
<div v-if="$store.state.auth.loggedIn">
  <v-container>
    <h4>No Handphone Terdaftar</h4>
    <div class="d-flex justify-space-between mt-4">
        <span>{{ loggedInUser.nomor_handphone }}</span>
        <v-btn 
            outlined
            color="#4EC49A"
            class="btn"
            x-large
            @click="changeEmail"
        >
        Ganti No Handphone
        </v-btn>
    </div>
  </v-container>
</div>
</template>

<script>
export default {
  name: "ChangeEmailPages",
  layout: 'user',
  middleware: ['auth', 'user'],
  data() {
    return {

    }
  },
  computed: {
    loggedInUser(){
      return this.$store.state.auth.user
    },
  },
  methods: {
    changeEmail(){
        this.$router.push('/akun/no-telepon-baru')
    }
  }
}
</script>

<style scoped>
span {
  width: 352.67px;
  height: 35px;
}
.rounded-card{
  border-radius: 50px;
}
.rounded-cards{
  border-radius: 15px;
}
</style>