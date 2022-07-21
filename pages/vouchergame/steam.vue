<template>
  <div class="bg">
    <br />
    <UserSteam />
  </div>
</template>

<script>
import UserSteam from '../../components/UserProduk/UserSteam.vue'

export default {
  name: 'UserSteams',
  components: {
    UserSteam
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
