<template>
  <div class="bg">
    <br />
    <PembayaranEwallet />
  </div>
</template>

<script>
import PembayaranEwallet from '../../../components/Pembayaran/PembayaranEwalletPaket.vue'
export default {
  name: 'PembayaranPulsaPagess',
  components: {
    PembayaranEwallet
  },
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
