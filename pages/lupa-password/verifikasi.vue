<template>
    
<div class="bg">
<br>
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
    <v-card-text align="center">
     <span>Kode Verifikasi telah dikirim melalui <br>
     Email ke rizkicc20318@gmail.com </span>
    </v-card-text>
    <CodeInput :loading="false" class="input mx-auto" color="#4EC49A" @change="onChange" @complete="onComplete" />
    <br><br><br><br>
    <p class="d-flex justify-center">Kirim Ulang</p>
    <v-btn dark to="/lupa-password/new-password" class="mx-auto d-flex justify-center" color="#4EC49A">Selanjutkan</v-btn>
  </v-card>
  <br><br><br>
  <br><br><br>
</v-card>
</div>
</template>

<script>
import CodeInput from "vue-verification-code-input";

export default {
    name: 'VerifikasiPage',
    components: {
        CodeInput
    },
    data: () => ({
    }),
    methods: {
        back() {
        this.$router.push('/lupa-password')
        },
        // onChange(v) {
        //     console.log("onChange ", v);
        // },
        // onComplete(v) {
        //     console.log("onComplete ", v);
        // },
    }
  }
</script>