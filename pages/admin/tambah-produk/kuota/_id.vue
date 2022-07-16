<template>
  <EditKuota />
</template>

<script>
import EditKuota from '~/components/adminProduk/EditKuota.vue'
export default {
  name: 'IndexEditProdukKuota',
  layout: 'admin',
  components: { EditKuota },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
