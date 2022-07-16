<template>
  <EditVoucher />
</template>

<script>
import EditVoucher from '~/components/adminProduk/EditVoucher.vue'
export default {
  name: 'IndexEditProdukVoucher',
  layout: 'admin',
  components: { EditVoucher },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
