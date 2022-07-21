<template>
  <div class="bg">
    <br />
    <PaymentMethodVoucherGames />
  </div>
</template>

<script>
import PaymentMethodVoucherGames from '../../../components/PaymentMethods/PaymentMethodsVoucherGames.vue'

export default {
  name: 'MetodePembayaran',
  components: {
    PaymentMethodVoucherGames
  },
  middleware: ['auth', 'user'],
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
