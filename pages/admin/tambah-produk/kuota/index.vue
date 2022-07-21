<template>
<div>
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
