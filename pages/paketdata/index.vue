<template>
  <div class="bg">
    <br />
    <UserPaketData />
  </div>
</template>

<script>
import UserPaketData from '../../components/UserProduk/UserPaketData.vue'

export default {
  name: 'PaketDataPagess',
  components: {
    UserPaketData
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
