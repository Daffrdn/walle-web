<template>
  <EditPulsa />
</template>

<script>
import EditPulsa from '~/components/adminProduk/EditPulsa.vue'
export default {
  name: 'IndexEditProdukPulsa',
  layout: 'admin',
  components: { EditPulsa },
  middleware: ['auth', 'admin'],
}
</script>

<style></style>
