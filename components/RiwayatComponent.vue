<template>
<div>
  <v-card
  class="mx-auto mt-5"
  elevation="0">
    <v-card-text>
      <v-row>
        <v-col col="12" md="4" sm="4">
          <v-btn dark block color="#4EC49A" class="btn" outlined x-large @click="berhasil">Berhasil</v-btn>
        </v-col>
        <v-col col="12" md="4" sm="4">  
          <v-btn dark block color="#FFC961" class="btn" outlined x-large @click="tertunda">Tertunda</v-btn>
        </v-col>
        <v-col col="12" md="4" sm="4">  
          <v-btn dark block color="#FF4D4D" class="btn" outlined x-large @click="gagal">Gagal</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
      <div v-if="show1">
        <BerhasilCard/>
      </div>
      <div v-if="show2">  
        <TertundaCard/>
      </div>
      <div v-if="show3">  
        <GagalCard/>
      </div>
  </v-card>
</div>
</template>

<script>
export default {
  data() {
        return {
          show1: false,
          show2: false,
          show3: false,
        }
      },
      methods: {
        // eslint-disable-next-line vue/no-dupe-keys
        berhasil(){
          this.show1 = true;
          this.show2 = false;
          this.show3 = false;
        },
        // eslint-disable-next-line vue/no-dupe-keys
        tertunda(){
          this.show1 = false;
          this.show2 = true;
          this.show3 = false;
        },
        // eslint-disable-next-line vue/no-dupe-keys
        gagal(){
          this.show1 = false;
          this.show2 = false;
          this.show3 = true;
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