<template>
<div>
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
