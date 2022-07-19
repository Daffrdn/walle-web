<template>
<div v-if="loggedInUser == 1">
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
  computed: {
    loggedInUser() {
      return this.$store.state.auth.user.role_id
    },
  }
}
</script>

<style></style>
