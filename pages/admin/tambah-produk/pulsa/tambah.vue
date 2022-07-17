<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <TambahPulsa />
</div>
</template>

<script>
import TambahPulsa from '~/components/adminProduk/TambahPulsa.vue'
export default {
  name: 'IndexTambahProdukPulsa',
  layout: 'admin',
  components: { TambahPulsa },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
