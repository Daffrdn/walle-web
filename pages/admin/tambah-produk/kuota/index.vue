<template>
<div v-if="loggedInUser == 1">
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
  computed: {
    loggedInUser() {
      return this.$store.state.auth.user.role_id
    },
  }
}
</script>

<style></style>
