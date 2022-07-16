<template>
  <div class="bg">
    <br />
    <PembayaranEwallet />
  </div>
</template>

<script>
import PembayaranEwallet from '../../../components/Pembayaran/PembayaranEwalletGame.vue'
export default {
  name: 'PembayaranPulsaPagess',
  components: {
    PembayaranEwallet
  },
  middleware: 'auth',
  data() {
    return {}
  },
}
</script>

<style></style>
