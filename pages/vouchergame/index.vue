<template>
  <div class="bg">
    <br />
    <VoucherCategory />
  </div>
</template>

<script>
export default {
  name: 'CategoryVoucher',
  middleware: ['auth', 'user'],
  data() {
    return {}
  },
}
</script>

<style></style>
