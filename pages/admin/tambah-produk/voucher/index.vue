<template>
<div>
  <TabelVoucher />
</div>
</template>

<script>
import TabelVoucher from '~/components/adminProduk/TabelVoucher.vue'
export default {
  name: 'IndexTabelProdukVoucher',
  layout: 'admin',
  components: { TabelVoucher },
  middleware: 'admin',
  
}
</script>

<style></style>
