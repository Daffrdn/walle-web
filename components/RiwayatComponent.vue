<template>
<div>
  <v-card
  class="mx-auto mt-5"
  elevation="0">
    <v-card-text>
      <v-row class="button_container">
        <v-col col="12" md="4" sm="4">
          <v-btn block exact link class="btn button-berhasil" outlined x-large @click="berhasil"><span>Berhasil</span></v-btn>
        </v-col>
        <v-col col="12" md="4" sm="4">  
          <v-btn block class="btn button-tertunda" outlined x-large @click="tertunda"><span>Tertunda</span></v-btn>
        </v-col>
        <v-col col="12" md="4" sm="4">  
          <v-btn block class="btn button-gagal" outlined x-large @click="gagal"><span>Gagal</span></v-btn>
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
import BerhasilCard from './riwayat/BerhasilCard.vue'
import TertundaCard from './riwayat/TertundaCard.vue'
import GagalCard from './riwayat/GagalCard.vue'

export default {
  name: 'RiwayatComponent',
  components: {
        GagalCard,
        TertundaCard,
        BerhasilCard
      },
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
.buttonContainer{
  margin-top:100px;
  text-align:center;
}
.button-berhasil{
  display:inline-block;
  
  font:normal normal 300 1.3em 'Open Sans';
  text-decoration:none; 
  
  color:#4EC49A;
  background-color:transparent;
  border:1px solid #4EC49A;
  border-radius:10px;
  
  padding: .3em 1.2em;
  margin:5px;
      
  background-size: 200% 100%; 
  background-image: linear-gradient(to right, transparent 50%, #4EC49A 50%);
  transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
}
/* 
.button-berhasil:hover{
  color:rgba(255, 255, 255, 1);
  background-color:#4EC49A;
  background-position: -100% 100%;
} */

.button-berhasil:focus{
  color:rgba(255, 255, 255, 1);
  background-color:#4EC49A;
  background-position: -100% 100%;
}
.button-tertunda{
  display:inline-block;
  
  font:normal normal 300 1.3em 'Open Sans';
  text-decoration:none; 
  
  color:#FFC961;
  background-color:transparent;
  border:1px solid #FFC961;
  border-radius:10px;
  
  padding: .3em 1.2em;
  margin:5px;
      
  background-size: 200% 100%; 
  background-image: linear-gradient(to right, transparent 50%, #FFC961 50%);
  transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
}

.button-tertunda:hover{
  color:rgba(255, 255, 255, 1);
  background-color:#FFC961;
  background-position: -100% 100%;
}

.button-tertunda:focus{
  color:rgba(255, 255, 255, 1);
  background-color:#FFC961;
  background-position: -100% 100%;
}

.button-gagal{
  display:inline-block;
  
  font:normal normal 300 1.3em 'Open Sans';
  text-decoration:none; 
  
  color:#FF4D4D;
  background-color:transparent;
  border:1px solid #FF4D4D;
  border-radius:10px;
  
  padding: .3em 1.2em;
  margin:5px;
      
  background-size: 200% 100%; 
  background-image: linear-gradient(to right, transparent 50%, #FF4D4D 50%);
  transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
}

.button-gagal:hover{
  color:rgba(255, 255, 255, 1);
  background-color:#FF4D4D;
  background-position: -100% 100%;
}

.button-gagal:focus{
  color:rgba(255, 255, 255, 1);
  background-color:#FF4D4D;
  background-position: -100% 100%;
}
</style>