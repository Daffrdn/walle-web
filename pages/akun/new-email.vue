<template>
<div v-if="$store.state.auth.loggedIn">
  <v-container>
    <h4>Email Baru</h4>
    <div class="d-flex justify-space-between mt-4">
        <v-text-field
            type="email"
            label="Email Baru"
            outlined
            color="black"
            single-line
          />
        <v-btn 
            dark
            color="#4EC49A"
            class="ml-5 btn rounded-cards"
            elevation="0"
            x-large
            @click="changeEmail"
        >
        Ganti Email
        </v-btn>
    </div>
  </v-container>
</div>
</template>

<script>
export default {
  name: "NewEmailPages",
  layout: 'user',
  middleware: 'auth',
  data() {
    return {

    }
  },
  computed: {
    loggedInUser(){
      return this.$store.state.auth.user
    },
  },
  methods: {
    
  }
}
</script>

<style scoped>
span {
  width: 352.67px;
  height: 35px;
}
.rounded-cards{
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
</style>