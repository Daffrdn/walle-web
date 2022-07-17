<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <TambahKuota />
</div>
</template>

<script>
import TambahKuota from '~/components/adminProduk/TambahKuota.vue'
export default {
  name: 'IndexTmabahProdukKuota',
  layout: 'admin',
  components: { TambahKuota },
  middleware: "admin",
}
</script>

<style></style>
