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
        <form method="post" @submit.prevent="tambahSaldo">
            <v-card-text>
                <span>Tambah Saldo</span>
                <v-select
                    v-model="saldo"
                    type="input"
                    :items="items"
                    required
                    outlined
                    color="#B0466C"
                    single-line
                    label="Pilih Nominal"
                    class="mt-3 autocomplete"
                    prefix="Rp "
                ></v-select>
            </v-card-text>
            <v-card-text class="mt-5">
                <v-btn
                    dark
                    block
                    color="#B0466C"
                    x-large
                    class="radius-button"
                    type="submit"
                >
                    Tambah
                </v-btn>
            </v-card-text>
        </form>
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
      items: ['100000', '200000', '300000', 'Lainnya..'],
      saldo: null,
    }),
    methods: {
        async tambahSaldo(){
        try {
          await this.$axios.post('/kategori/saldo', {
              saldo: parseInt(this.saldo),
              kategori_id: 1
          }, {
                headers: {
                    Authorization: this.$auth.$storage._state['_token.local'],
                },
            }
          )
                this.$router.push("/admin/tambah-saldo") 
          } catch(e) {
            this.error = this.message
          }
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