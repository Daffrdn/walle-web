<template>
  <v-app>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}

html {
  background-color: white;
  scroll-behavior: smooth !important;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f8fefc;
}

* {
  font-family: 'Poppins', sans-serif;
}

.bg-admin {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f9edf2;
  background: #f9edf2;
}

.btn {
  text-transform: unset !important;
}
</style>
