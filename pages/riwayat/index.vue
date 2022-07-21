<template>
<div v-if="$store.state.auth.loggedIn">
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
  middleware: ['auth', 'user'],
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