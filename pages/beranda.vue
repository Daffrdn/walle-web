<template>
<div>
  <v-row>
    <v-col>
      <BerandaComponent/>
    </v-col>
  </v-row>
</div>  
</template>

<script>
export default {
  name: 'BerandaPages',
  layout: "user",
  middleware: ['user', 'auth'],
  dat() {
    return {
      role_id: null,
    }
  }
}
</script>