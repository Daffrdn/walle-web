<template>
<div>
  <TambahVoucher />
</div>
</template>

<script>
import TambahVoucher from '~/components/adminProduk/TambahVoucher.vue'
export default {
  name: 'IndexTmabahProdukVoucher',
  layout: 'admin',
  components: { TambahVoucher },
  middleware: 'admin',
}
</script>

<style></style>
