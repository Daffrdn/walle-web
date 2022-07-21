<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      color="#4EC49A"
      dark
      fixed
      app
    >
      <v-card-title align="center" class="mx-auto d-flex justify-center">
        <img src="../static/2 11.png" />
      </v-card-title>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon size="30">{{ item.img }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list-item @click="logout" router exact>
          <v-list-item-action>
            <v-icon size="30" color="white">mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title > Log Out </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-{{ `chevron-${clipped ? 'down' : 'left'}` }}</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="items.title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'UserLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          img: 'mdi-home-outline',
          title: 'Beranda',
          to: '/beranda',
        },
        {
          img: 'mdi-history',
          title: 'Riwayat',
          to: '/riwayat',
        },
        {
          img: 'mdi-account-circle-outline',
          title: 'Akun',
          to: '/akun',
        },
      ],
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  }
}
</script>

<style scoped></style>
