<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="#C44E78"
      dark
      fixed
      app
      max-width="300"
    >
    <v-card-title align="center" class="mx-auto d-flex justify-center">    
      <img src="../static/2 11.png">
    </v-card-title>

      <v-list>
        <v-list-item
          to="/admin"
          router
          exact
        >
          <v-list-item-action>
            <v-img src="/home.png" max-width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Beranda </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group
          :value="true"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-action>
            <v-img src="/home.png" max-width="30"></v-img>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title><span>Manage Produk</span></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            :to="admin.to"
            router
            exact
          >
            <v-list-item-title class="white--text" v-text="admin.title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item
          to="/admin/status-transaksi"
          router
          exact
        >
          <v-list-item-action>
            <v-img src="/vector.png" max-width="30"></v-img>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Status Transaksi </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app color="white" elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
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
  name: 'AdminLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      admins: [
        {
         title: "Tambah Saldo",
         to: "/admin/tambah-saldo"
        },
        {
         title: "Tambah Produk",
         to: "/admin/tambah-produk"
        }
      ],
      miniVariant: false,
      title: 'Beranda',
    }
  },
}
</script>

<style scoped>
span {
    color: #FFFFFF;
}

v-list-group {
    color: #FFFFFF;
}
</style>