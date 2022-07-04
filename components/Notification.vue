<template>
  <div class="notification is-danger">
    <v-alert v-model="show" color="#FFD0D0" class="alert">
      <div class="d-flex justify-space-between">
        <span class="mt-2">{{ message }}</span>
        <v-btn
          icon
          @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'NotificationForm',
  // eslint-disable-next-line vue/require-prop-types
  props: ['message'],
  data(){
    return {
      show: true,
    }
  }
}
</script>

<style scoped>
.alert {
  border-radius: 10px;
}
</style>