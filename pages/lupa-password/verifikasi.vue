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
            <h2>Verifikasi</h2>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="600"
  elevation="0"
  >
    <v-card-title class="d-flex justify-center">
        <h1>Kode Verifikasi</h1>
    </v-card-title>
    <br>
    <Notification v-if="error" :message="error"/>
    <form method="post" @submit.prevent="verifikasi">
    <v-otp-input
      v-model="otp"
      height="100px"
      color="#4EC49A"
      type="number"
      length="6"
    ></v-otp-input>
      <!-- <CodeInput v-model="code" type="input" :loading="false" class="input mx-auto" color="#4EC49A" @change="onChange" @complete="onComplete" /> -->
      <v-card-text align="center"><br>
        <p>Kode Verifikasi telah dikirim melalui <br>
        Email ke <span v-text="$store.state.user.emails"></span> </p>
      </v-card-text>
      <a class="d-flex justify-center">Kirim Ulang</a><br>
      <v-btn dark type="submit" class="mx-auto d-flex justify-center btn" color="#4EC49A">Selanjutnya</v-btn>
    </form>
  </v-card>
  <br><br><br>
  <br><br><br>
  </div>
</v-card>
</div>
</template>

<script>
// import CodeInput from "vue-verification-code-input";

export default {
    name: 'VerifikasiPage',
    components: {
        // CodeInput
    },
    data: () => ({
      otp: '',
      error: null,
    }),
    methods: {
        // onChange(v) {
        //     // eslint-disable-next-line no-console
        //     console.warn("onChange ", v);
        // },
        // onComplete(v) {
        //     this.code = v
        // },
        back() {
        this.$router.push('/login')
        },
        // verifikasi() {
        // this.$router.push('/lupa-password/success-new-password')
        // },
        async verifikasi() {
          try {
            await this.$axios.post('/user/reset/update', {
              email: this.$store.state.user.emails,
              kode: this.otp,
              password: this.$store.state.user.passwords,
            })
          this.$router.push('/lupa-password/success-new-password')
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

h1,a,span {
  color: #4EC49A;
}

CodeInput{
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

.v-otp-input >>> input {
  font-size: 24px;
  color: #4ec49a;
}

.v-otp-input >>> fieldset {
  border-color: rgba(78, 196, 154, 0.4);
}
</style>