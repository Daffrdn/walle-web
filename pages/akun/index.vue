<template>
<div v-if="$store.state.auth.loggedIn">
  <v-row>
    <v-col>
      <AkunComponent/>
    </v-col>
  </v-row>
</div> 
</template>

<script>
export default {
    name: 'AkunPages',
    layout: "user",
    middleware: 'auth',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>

</style>