<template>
  <div class="bg">
    <br />
    <PaymentMethodPulsa />
  </div>
</template>

<script>
import PaymentMethodPulsa from '../../../components/PaymentMethods/PaymentMethodPulsa.vue'

export default {
  name: 'MetodePembayaran',
  components: {
    PaymentMethodPulsa
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
