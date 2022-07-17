<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <TabelKuota />
</div>
</template>

<script>
import TabelKuota from '~/components/adminProduk/TabelKuota.vue'
export default {
  name: 'IndexTabelProdukKuota',
  layout: 'admin',
  components: { TabelKuota },
  middleware: "admin",
}
</script>

<style></style>
