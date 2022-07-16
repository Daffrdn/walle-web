<template>
  <TabelPulsa />
</template>

<script>
import TabelPulsa from '~/components/adminProduk/TabelPulsa.vue'
export default {
  name: 'IndexTabelProdukPulsa',
  components: { TabelPulsa },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
