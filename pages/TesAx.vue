<template>
  <div class="bg">
    <h1>ini H1</h1>
    <h2>ini h2</h2>
    <p>{{ listPulsa }}</p>
    <div class="konten">
      <v-row>
        <v-col cols="12" sm="2">
          <v-card class="country-img pa-2" height="56px" outlined>
            <v-img height="38px" contain src="/provider/tri.png" />
          </v-card>
        </v-col>
        <v-col cols="12" sm="10">
          <v-text-field
            v-model="phone"
            oninput="this.value = this.value.replace(/[^0-9]/g, '')"
            type="text"
            label=" Nomor Telepon"
            color="black"
            outlined
            prefix="+62"
            class="phone-input text-green"
          />
        </v-col>
      </v-row>
      <div class="kotak">
        <v-otp-input
          height="100px"
          color="#4EC49A"
          type="text"
          length="6"
        ></v-otp-input>
      </div>
      <form action="/action_page.php">
        <label for="fname">First name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          class="text-green"
        /><br /><br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
      <v-btn @click="tes">TES</v-btn>

      <v-flex xs12 sm6>
        <v-text-field
          class="text-green"
          v-model="first"
          label="First Name"
          solo
        ></v-text-field>
      </v-flex>
    </div>
  </div>
</template>
<script>
export default {
  //   async asyncData() {
  //     const { data } = await axios.get(
  //       'https://virtserver.swaggerhub.com/dennydolok/WallE/1.0/produk/kategori-provider/1/1'
  //     )
  //     return {
  //       pulsa: data,
  //     }
  //   },
  data() {
    return {
      phone: '',
      first: 'John',
    }
  },
  computed: {
    listPulsa() {
      return this.$store.state.pulsa.listPulsa
    },
  },
  mounted() {
    this.fetchPulsa()
  },
  methods: {
    fetchPulsa() {
      this.$store.dispatch('pulsa/fetchPulsa')
    },
    tes() {
      console.log(this.phone)
    },
  },
}
</script>
<style scoped>
.country-img {
  border: 1px solid rgba(78, 196, 154, 0.4);
  border-radius: 10px;
}
.konten {
  width: 80%;
  margin: 0 auto;
}
.v-otp-input >>> input {
  font-size: 24px;
  color: #4ec49a;
}
.v-otp-input >>> fieldset {
  border-color: rgba(78, 196, 154, 0.4);
}
/* .v-otp-input:focus >>> fieldset {
  border: 1px solid red !important;
} */

.v-text-field--outlined >>> fieldset {
  border: 1px solid rgba(78, 196, 154, 0.4);
  border-radius: 10px;
}
.kotak {
  width: 50%;
  margin: 0 auto;
}

input {
  color: green !important;
}

/* input {
  color: red !important;
} */
</style>
