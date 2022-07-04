<template>
<div>
  <br>
  <v-card
  class="rounded-cards"
  elevation="0"
  color="#4EC49A"
  >

    <v-card-actions class="ml-6">
      <v-list-item class="grow mt-4">
        <v-list-item-action>
          <v-img
            width="60"
            alt=""
            src="/icon-nomer telepon.png"
          ></v-img>
        </v-list-item-action>

        <v-list-item-content>
            <h3 class="white--text">Nomor Telepon Utama</h3>
              <v-list-item-title></v-list-item-title>
            <span class="white--text" >{{loggedInUser.nomor_handphone}}</span>
        </v-list-item-content>  
      </v-list-item>
    </v-card-actions>
    <br />
  </v-card>

  <v-card
  class="mx-auto"
  elevation="0">
    <v-row class="mx-auto mt-5">
      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-pulsa.png"
          @click="pulsa"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-paketData.png"
          @click="paketData"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-game.png"
          @click="voucherGames"
        ></v-img>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
  </v-card>
</div>
</template>

<script>
export default {
  layout: "user",
  data() {
        return {

        }
      },
      computed: {
    loggedInUser(){
      return this.$store.state.auth.user
    },
    isAuthenticated(){
      return this.$store.state.auth.loggedIn
    }
  },
      methods: {
        pulsa(){
          this.$router.push("/pulsa")
        },
        paketData(){
          this.$router.push("/paket-data")
        },
        voucherGames(){
          this.$router.push("/voucher-games")
        },
      }
}
</script>

<style scoped>

.rounded-card{
  border-radius: 50px;
}
.rounded-cards{
  border-radius: 15px;
}
</style>