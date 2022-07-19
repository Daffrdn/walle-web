<template>
  <div>
    <v-container>
      <div class="d-flex align-center ml-3 mt-3">
        <v-img src="/akun/akun.png" max-width="40px"> </v-img>
        <span class="ml-5 mt-2">{{ loggedInUser.nama }}</span>
      </div>
    </v-container>
    <v-divider class="mt-3"></v-divider>
    <v-container>
      <div class="d-flex justify-space-between mt-4">
        <span>Email </span>
        <div>
          <span class="ml-5">{{ loggedInUser.email }}</span>
          <v-btn icon color="#4EC49A">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex justify-space-between mt-6">
        <span>Nomor Telepon </span>
        <div>
          <span class="ml-5">{{ loggedInUser.nomor_handphone }}</span>
          <v-btn icon color="#4EC49A" @click="changeTelepon">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex align-end flex-column">
        <v-btn text color="#4EC49A" x-large class="mt-4 btn" @click="logout">
          <v-icon>mdi-logout </v-icon>
          Log out
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    loggedInUser() {
      return this.$store.state.auth.user
    },
    isAuthenticated() {
      return this.$store.state.auth.loggedIn
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    changeTelepon() {
      this.$router.push('/akun/ganti-no-telepon')
    },
  },
}
</script>

<style scoped>
span {
  width: 352.67px;
  height: 35px;
}
.rounded-card {
  border-radius: 50px;
}
.rounded-cards {
  border-radius: 15px;
}
</style>
