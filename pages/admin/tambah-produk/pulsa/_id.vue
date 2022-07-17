<template>
<div v-if="$store.state.auth.user.role_id == 1">
  <EditPulsa />
</div>
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
