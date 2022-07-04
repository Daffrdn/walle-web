<template>
  <div class="bg">
    <br />
    <PaymentMethod />
  </div>
</template>

<script>
export default {
  name: 'MetodePembayaran',
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
