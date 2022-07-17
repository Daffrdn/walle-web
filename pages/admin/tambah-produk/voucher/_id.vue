<template>
  <div v-if="$store.state.auth.user.role_id == 1">
    <EditVoucher />
  </div>
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
