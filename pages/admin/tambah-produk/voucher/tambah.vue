<template>
  <TambahVoucher />
</template>

<script>
import TambahVoucher from '~/components/adminProduk/TambahVoucher.vue'
export default {
  name: 'IndexTmabahProdukVoucher',
  layout: 'admin',
  components: { TambahVoucher },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
