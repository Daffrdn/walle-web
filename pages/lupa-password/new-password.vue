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
    <form method="post" @submit.prevent="newPassword">
       <v-text-field
        v-model="passwordBaru"
        label="Password"
        single-line
        outlined
        color="#4EC49A"
        required
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        counter
        @click:append="show1 = !show1"
        ></v-text-field>
       <v-text-field
        v-model="passwordBaru2"
        label="Password"
        single-line
        outlined
        color="#4EC49A"
        required
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="confirmPasswordRules"
        :type="show2 ? 'text' : 'password'"
        counter
        @click:append="show2 = !show2"
        ></v-text-field>
        <v-btn 
        block 
        dark 
        x-large 
        class="mt-5" 
        color="#4EC49A"
        type="submit"
        > 
         Konfirmasi
        </v-btn>
      </form>
        <br>
    </v-card>
    <br><br><br><br>
    <br><br>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'NewPasswwordpage',
    data: () => ({
        show1: false,
        show2: false,
        passwordBaru: "",
        passwordBaru2: "",
        passwordRules: [(v) => !!v || "Passwordnya harus unik ya", (v) => v.length >= 8 || "Min 8 characters"],
        confirmPasswordRules: [(v) => !!v || "Masukan Password yang sama", (v) => v.length >= 8 || "Min 8 characters"],
    }),
    methods: {
      back() {
        this.$router.push('/lupa-password/verifikasi')
      },
      async newPassword() {
          try {
            await this.$axios.post('/user/reset/update', {
              password: this.passwordBaru,
            })
          this.$router.push('/lupa-password/succes-new-password')
          } catch (e) {
            this.error = e.response.data.message
          }
        },
    }
}
</script>

<style scoped>
.rounded-card{
  border-radius:50px;
}
</style>