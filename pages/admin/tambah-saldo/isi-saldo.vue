<template>
  <div class="bg-admin">
    <br><br>
    <v-card
        class="mx-auto isiSaldo"
        width="1278px"
        elevation="1"
    ><br>
    <v-card-title class="ml-16">
        <v-btn
            icon
            x-large
        >
        <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        Isi Saldo
    </v-card-title>
        <v-card 
            class="mx-auto "
            width="1000px"
            elevation="0"
        >
            <v-card-text>
                <span>Tambah Saldo</span>
                <v-autocomplete
                v-model="saldo"
                :items="items"
                outlined
                color="#B0466C"
                single-line
                label="Pilih Nominal"
                class="mt-3 autocomplete"
            ></v-autocomplete>
            </v-card-text>
            <v-card-text class="mt-5">
                <v-btn
                    dark
                    block
                    color="#B0466C"
                    x-large
                    class="radius-button"
                    @click="tambahSaldo"
                >
                    Tambah
                </v-btn>
            </v-card-text>
        </v-card>
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>
    </v-card>
  </div>
</template>

<script>
export default {
    name: "AdminIsiSaldoPages",
    data: () => ({
      items: ['Rp. 1000.000', 'Rp. 2000.000', 'Rp. 3000.000', 'Lainnya..'],
      saldo: null,
    }),
    methods: {
        tambahSaldo(){
            this.$store.commit('tambah_saldo', this.saldo)
            this.$router.push("/admin/tambah-saldo") 
        }
    }
}
</script>

<style scoped>
.isiSaldo{
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(78, 196, 154, 0.05);
    border-radius: 10px;
}

span {
    width: 284px;
    height: 30px;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    display: flex;
    color: #434343;
}

.autocomplete {
    box-sizing: border-box;

    height: 56px;
    border: 1px solid #C44E78;
    border-radius: 10px;
}

.radius-button {
    border-radius: 10px;
}
</style>