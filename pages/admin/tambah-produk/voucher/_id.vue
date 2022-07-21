<template>
  <div>
    <EditVoucher />
  </div>
</template>

<script>
import EditVoucher from '~/components/adminProduk/EditVoucher.vue'
export default {
  name: 'IndexEditProdukVoucher',
  layout: 'admin',
  components: { EditVoucher },
  middleware: 'admin',
}
</script>

<style></style>
