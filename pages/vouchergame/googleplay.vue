<template>
  <div class="bg">
    <br />
    <UserGooglePlay />
  </div>
</template>

<script>
import UserGooglePlay from '../../components/UserProduk/UserGooglePlay.vue'

export default {
  name: 'UserGooglePlays',
  components: {
    UserGooglePlay
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
