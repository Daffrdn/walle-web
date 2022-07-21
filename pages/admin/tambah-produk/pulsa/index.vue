<template>
<div>
  <TabelPulsa />
</div>
</template>

<script>
import TabelPulsa from '~/components/adminProduk/TabelPulsa.vue'
export default {
  name: 'IndexTabelProdukPulsa',
  layout: 'admin',
  components: { TabelPulsa },
  middleware: 'admin',
}
</script>

<style></style>
