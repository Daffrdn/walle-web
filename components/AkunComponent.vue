<template>
<div>
  <v-card
  class="mx-auto mt-5"
  max-width="900"
  elevation="0">
    <v-card-text>
      <v-avatar
        color="#4EC49A"
        class="mx-auto d-flex justify-center"
        size="123"
        dark
      ></v-avatar>
      <v-btn
      text
      color="#4EC49A"
      x-large
      class="mx-auto d-flex justify-center"
      >
      Edit
      <v-icon>mdi-pencil-box-outline</v-icon>
      </v-btn>
      <v-btn
      text
      color="#4EC49A"
      x-large
      class="mx-auto d-flex justify-center"
      @click="logout"
      >
      Log out
      <v-icon>mdi-user</v-icon>
      </v-btn>
    </v-card-text>
    <br><br>
  </v-card>
</div>
</template>

<script>
export default {
  data() {
        return {

        }
      },
      methods: {

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