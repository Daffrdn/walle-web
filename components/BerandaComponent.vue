<template>
<div>
  <br>
  <v-card
    class="mx-auto mt-5"
    max-width="1000"
    elevation="0"
    shaped
  ><br>
  <v-card
  class="mx-auto"
  max-width="950"
  elevation="0">
    <v-card-title>
      <h2>Beranda</h2>
    </v-card-title>
  </v-card>
  <p></p>
  <v-card
  class="mx-auto"
  max-width="900"
  elevation="0"
  color="#4EC49A"
  shaped
  >
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-action>
          <v-img
            width="50"
            alt=""
            src="/icon-nomer telepon.png"
          ></v-img>
        </v-list-item-action>

        <v-list-item-content>
          <h3 class="white--text">Nomor Telepon Utama</h3>
          <v-list-item-title><span class="white--text">0895 1537 0909</span></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card-actions>
  </v-card>

  <v-card
  class="mx-auto"
  max-width="900"
  elevation="0">
    <v-row class="mx-auto mt-5">
      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-pulsa.png"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-paketData.png"
        ></v-img>
      </v-col>

      <v-col>
        <v-img
          width="150"
          alt=""
          src="/icon-game.png"
        ></v-img>
      </v-col>
      <v-col>
      </v-col>
    </v-row>
    <br><br><br><br><br><br>
  </v-card>
  <br><br><br>
</v-card>
</div>
</template>

<script>
export default {
  data() {
        return {

        }
      },
}
</script>

<style>

</style>