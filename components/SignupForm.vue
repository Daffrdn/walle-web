<template>
  <v-card class="mx-auto mt-5 container" max-width="1200" elevation="2"
    ><br />
    <div class="wrapper">
      <v-card class="mx-auto mt-3" max-width="1100" elevation="0">
        <v-card-title>
          <v-btn icon @click="back">
            <v-icon x-large> mdi-chevron-left </v-icon>
          </v-btn>
          <h2>Daftar</h2>
        </v-card-title>
      </v-card>
      <v-card class="mx-auto" max-width="1000" elevation="0">
        <h3>Daftar Dulu yuk</h3>
        <br />
        <Notification v-if="error" :message="error" />
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
          <!-- <VuePhoneNumberInput  v-model="vuePhone.phone" v-bind="vuePhone.props" required height="300"/> -->
          <v-row>
            <v-col cols="12" sm="2">
              <v-card class="country-img pa-2" height="56px" outlined>
                <v-row>
                  <v-col sm="6" class="ml-4 pr-0">
                    <v-img height="40" contain src="/Bendera.png" label="+62" />
                  </v-col>
                  <v-col class="mt-2 pl-0">
                    <span>+62</span>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col cols="12" sm="10">
              <v-text-field
                v-model="phone"
                type="text"
                label=" Nomor Telepon"
                color="black"
                single-line
                required
                outlined
                class="phone-input"
                :rules="phoneRules"
              />
            </v-col>
          </v-row>
          <!-- <v-overflow-btn :items="dropdown_country" label="Country" outlined color="#4EC49A"></v-overflow-btn>
        <v-text-field label="No. Hp" single-line outlined max-width="40px" color="#4EC49A"></v-text-field> -->
          <!-- <vue-tel-input-vuetify :valid-characters-only="true" placeholder="Nomor Telepon" label="Nomor Telepon" :rules="phoneRules" v-model="phoneNumber" single-line outlined :onlyCountries="['ID']"></vue-tel-input-vuetify> -->
          <span class="d-flex justify-center grey--text"
            >Dengan ini saya setuju untuk mematuhi peraturan</span
          >
          <span class="d-flex justify-center grey--text"
            >di platform ini serta kebijakan privasi</span
          >
          <v-btn
            block
            dark
            x-large
            color="#4EC49A"
            type="submit"
            class="btn mt-5"
          >
            Daftar </v-btn
          ><br />
        </form>
      </v-card>
      <br /><br />
    </div>
  </v-card>
</template>

<script>
// import VuePhoneNumberInput from 'vue-phone-number-input';
// import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import Notification from './Notification.vue'

export default {
  components: {
    // VuePhoneNumberInput,
    Notification,
  },
  data: () => ({
    // dropdown_country: [{ text: "+1" }, { text: "+62" }, { text: "+10" }, { text: "+99" }],
    show1: false,
    show2: false,
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    error: null,
    passwordRules: [
      (v) => !!v || 'Passwordnya harus unik ya',
      (v) => v.length >= 8 || 'Min 8 characters',
    ],
    confirmPasswordRules: [
      (v) => !!v || 'Masukan Password yang sama',
      (v) => v.length >= 8 || 'Min 8 characters',
    ],
    nameRules: [(v) => !!v || 'Lengkapi namamu dulu ya'],
    emailRules: [(v) => !!v || 'Lengkapi emailmu dulu '],
    phoneRules: [(v) => !!v || 'Nomor telepon tidak boleh kosong'],
    phone: '',
    indo: '0',
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || 'Passwordmu tidak cocok'
    },
  },
  methods: {
    back() {
      this.$router.push('/login')
    },
    // register(){
    //   this.$store.commit('user/add_email', this.email);
    //   this.$router.push('/daftar/verifikasi')
    // },
    async register() {
      try {
        await this.$axios.post('/user', {
          nama: this.username,
          email: this.email,
          password: this.password,
          nomor_handphone: this.indo + this.phone,
          role_id: 2,
        })
        this.$store.commit('user/add_email', this.email)
        this.$router.push('/daftar/verifikasi')
      } catch (e) {
        this.error = e.response.data.pesan
      }
    },
  },
}
</script>

<style scoped>
h3 {
  color: #4ec49a;
}
.rounded-card {
  border-radius: 50px;
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
.country-img {
  border: 1px solid rgba(78, 196, 154, 0.4);
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
.btn {
  box-shadow: none !important;
}
span {
  font-size: 16px;
}
</style>
