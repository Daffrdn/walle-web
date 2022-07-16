<template>
  <TabelVoucher />
</template>

<script>
import TabelVoucher from '~/components/adminProduk/TabelVoucher.vue'
export default {
  name: 'IndexTabelProdukVoucher',
  layout: 'admin',
  components: { TabelVoucher },
  middleware: ['auth', 'admin'],
  
}
</script>

<style></style>
