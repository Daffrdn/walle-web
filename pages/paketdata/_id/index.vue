<template>
  <div class="bg">
    <br />
    <PaymentMethodPaket />
  </div>
</template>

<script>
import PaymentMethodPaket from '../../../components/PaymentMethods/PaymentMethodsPaket.vue'
export default {
  name: 'MetodePembayaranPaket',
  components: {
    PaymentMethodPaket
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
