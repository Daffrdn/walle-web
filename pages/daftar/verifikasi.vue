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
      <!-- <CodeInput type="input" :loading="false" class="input mx-auto" color="#4EC49A" @change="onChange" @complete="onComplete" /> -->
      <v-card-text align="center"><br>
        <p>Kode Verifikasi telah dikirim melalui <br>
        Email ke <span v-text="$store.state.emails"></span> </p>
      </v-card-text>
      <a class="d-flex justify-center">Kirim Ulang</a><br>
      <v-btn dark type="submit" class="mx-auto d-flex justify-center" color="#4EC49A">Konfirmasi</v-btn>
    </form>
  </v-card>
  <br><br><br>
  <br><br><br>
</v-card>
</div>
</template>

<script>
// import CodeInput from "vue-verification-code-input";

export default {
    name: 'VerifikasiPages',
    components: {
        // CodeInput
    },
    data: () => ({
      error: null,
      otp: '',
    }),
    methods: {
        // onChange(v) {
        //   // eslint-disable-next-line no-console
        //   console.warn("onChange", v);
        // },
        // onComplete(v) {
        //   this.code = v;
        // },
        back() {
        this.$router.push('/login')
        },
        async verifikasi() {
          try {
            await this.$axios.post('/user/verifikasi', {
              email: this.$store.state.emails,
              code: this.otp,
            })

            this.$router.push('/beranda')
          } catch (e) {
            this.error = e.response.data.pesan
          }
        },
    },
  }
</script>

<style scoped>
.v-otp-input >>> input {
  font-size: 24px;
  color: #4ec49a;
}

.v-otp-input >>> fieldset {
  border-color: rgba(78, 196, 154, 0.4);
}
.rounded-card{
  border-radius:50px;
}

h1,a,span {
  color: #4EC49A;
}

CodeInput{
  color: #4EC49A;
}
</style>