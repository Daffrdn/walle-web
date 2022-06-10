<template>
<div class="bg">
<br>
    <v-card
        class="mx-auto mt-5"
        max-width="1200"
        elevation="1"
        shaped
    ><br>
    <v-card
    class="mx-auto mt-3"
    max-width="1100"
    elevation="0">
        <v-card-title>
            <v-btn icon @click="back">
                <v-icon x-large>
                mdi-chevron-left
                </v-icon>
            </v-btn>
                <h2>Lupa Password</h2>
        </v-card-title>
    </v-card>
    <v-card
    class="mx-auto"
    max-width="1000"
    elevation="0"
    >
    <br><br>
        <v-text-field
            label="Password Baru"
            single-line
            outlined
            class="mt-3"
            color="#4EC49A"
        ></v-text-field>
        <v-text-field
            label="Ulangi Password Baru"
            single-line
            outlined
            class="mt-3"
            color="#4EC49A"
        ></v-text-field>
        <v-btn 
            block 
            dark 
            x-large 
            class="mt-5" 
            color="#4EC49A"
            @click="confirm"> 
        Konfirmasi
        </v-btn>
        <br>
    </v-card>
    <br><br><br><br>
    <br><br>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'NewPasswwordpage',
    data: () => ({
    }),
    methods: {
      confirm() {
        this.$router.push('/lupa-password/success-new-password')
      },
      back() {
        this.$router.push('/lupa-password/verifikasi')
      }
    }
}
</script>

<style>

</style>