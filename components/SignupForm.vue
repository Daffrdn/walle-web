<template>
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
          <h2>Daftar</h2>
    </v-card-title>
  </v-card>
  <v-card
  class="mx-auto"
  max-width="1000"
  elevation="0"
  >
  <h3>Daftar Dulu yuk</h3><br>
  <Notification v-if="error" :message="error"/>
  <form method="post" @submit.prevent="register">
    <v-text-field 
      v-model="username"
      label="Nama" 
      type="text"
      single-line 
      outlined 
      required
      color="#4EC49A" 
      :rules="nameRules"
      ></v-text-field>
    <v-text-field
      v-model="email"
      label="Email"
      type="email" 
      single-line 
      outlined 
      required
      color="#4EC49A" 
      :rules="emailRules"
      ></v-text-field>
      <v-text-field
        v-model="password"
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
        v-model="confirmPassword"
        label="Ulangi Password"
        single-line
        outlined
        required
        color="#4EC49A"
        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="confirmPasswordRules"
        :type="show2 ? 'text' : 'password'"
        hint="Masukan Password yang sama"
        counter
        @click:append="show2 = !show2"
      ></v-text-field>
      <VuePhoneNumberInput  v-model="vuePhone.phone" v-bind="vuePhone.props" required/>
      <br>
        <!-- <v-overflow-btn :items="dropdown_country" label="Country" outlined color="#4EC49A"></v-overflow-btn>
        <v-text-field label="No. Hp" single-line outlined max-width="40px" color="#4EC49A"></v-text-field> -->
      <!-- <vue-tel-input-vuetify :valid-characters-only="true" placeholder="Nomor Telepon" label="Nomor Telepon" :rules="phoneRules" v-model="phoneNumber" single-line outlined :onlyCountries="['ID']"></vue-tel-input-vuetify> -->
      <v-btn block dark x-large color="#4EC49A" type="submit"> Daftar </v-btn><br />
      </form>
        <span class="d-flex justify-center grey--text">Dengan ini saya setuju untuk mematuhi peraturan</span>
        <span class="d-flex justify-center grey--text">di platform ini serta kebijakan privasi</span>
  </v-card>
  <br><br>
</v-card>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import Notification from './Notification.vue'

export default {
  components:{
    VuePhoneNumberInput,
    Notification,
  },
    data: () => ({
    // dropdown_country: [{ text: "+1" }, { text: "+62" }, { text: "+10" }, { text: "+99" }],
    show1: false,
    show2: false,
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    error: null,
    passwordRules: [(v) => !!v || "Passwordnya harus unik ya", (v) => v.length >= 8 || "Min 8 characters"],
    confirmPasswordRules: [(v) => !!v || "Masukan Password yang sama", (v) => v.length >= 8 || "Min 8 characters"],
    nameRules: [(v) => !!v || "Lengkapi namamu dulu ya"],
    emailRules: [(v) => !!v || "Lengkapi emailmu dulu "],
    phoneRules: [(v) => !!v || "Nomor telepon tidak boleh kosong"],
    vuePhone: {
        phone: "",
        indo: "0",
        props: {
          clearable: true,
          fetchCountry: true,
          preferredCountries: ["US", "GB"],
          noExample: false,
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:"
          }
        }
      },
  }),
    computed: {
    passwordConfirmationRule() {
      return () => this.password === this.confirmPassword || "Passwordmu tidak cocok";
    },
  },
  methods: {
    back(){
      this.$router.push('/login')
    },
    // register(){
    //     this.$router.push('/daftar/verifikasi')
    //   },
    async register() {
      try {
        await this.$axios.post('/user', {
          name: this.username,
          email: this.email,
          password: this.password,
          phonenumber: this.vuePhone.indo + this.vuePhone.phone,
          roleid : 2,
        })

      } catch (e) {
        this.error = e.response.data.message
      }
        this.$router.push('/daftar/verifikasi')
    },
  },
}
</script>

<style scoped>
h3 {
  color: #4EC49A;
}
.rounded-card{
  border-radius:50px;
}
</style>