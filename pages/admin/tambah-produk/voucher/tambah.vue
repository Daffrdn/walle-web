<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <TambahVoucher />
</div>
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
