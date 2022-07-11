<template>
  <div class="bg">
    <br />
    <DetailTransaction />
  </div>
</template>

<script>
// import PaymentMethodPulsa from '../../../components/PaymentMethods/PaymentMethodPulsa.vue'

export default {
  name: 'DetailTransaksi',
  // components: {
  //   PaymentMethodPulsa
  // },
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
