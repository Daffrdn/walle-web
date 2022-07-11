<template>
  <div class="bg">
    <br />
    <PembayaranEwallet />
  </div>
</template>

<script>
import PembayaranEwallet from '../../../components/Pembayaran/PembayaranEwallet.vue'
export default {
  name: 'PembayaranPulsaPagess',
  components: {
    PembayaranEwallet
  },
  middleware: 'auth',
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {}
  },
}
</script>

<style></style>
