<template>
  <div class="bg">
    <br />
    <UserSteam />
  </div>
</template>

<script>
export default {
  name: 'UserSteams',
  middleware: 'auth',
  data() {
    return {}
  },
}
</script>

<style></style>
