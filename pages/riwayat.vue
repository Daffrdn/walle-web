<template>
<div v-if="!ïsAuthenticated">
  <v-row>
      <v-col>
        <RiwayatComponent/>
      </v-col>
    </v-row>
    <br>
</div>  
</template>

<script>
export default {
  name: 'RiwayatPages',
  layout: 'user',
  middleware: 'auth',
  computed: {
    isAuthenticated(){
      return this.$store.state.auth.loggedIn
    }
  }
}
</script>

<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f8fefc;
}
</style>