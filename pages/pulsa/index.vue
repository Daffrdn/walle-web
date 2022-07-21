<template>
  <div class="bg">
    <br />
    <UserPulsa />
  </div>
</template>

<script>
import UserPulsa from '../../components/UserProduk/UserPulsa.vue'

export default {
  name: 'PulsaPagess',
  components: {
    UserPulsa
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
