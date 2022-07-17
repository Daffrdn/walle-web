<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <TabelPulsa />
</div>
</template>

<script>
import TabelPulsa from '~/components/adminProduk/TabelPulsa.vue'
export default {
  name: 'IndexTabelProdukPulsa',
  layout: 'admin',
  components: { TabelPulsa },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
