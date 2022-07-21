<template>
<div>
  <TambahPulsa />
</div>
</template>

<script>
import TambahPulsa from '~/components/adminProduk/TambahPulsa.vue'
export default {
  name: 'IndexTambahProdukPulsa',
  layout: 'admin',
  components: { TambahPulsa },
  middleware: 'admin'
}
</script>

<style></style>
