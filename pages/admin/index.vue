<template>
 <div>
    <br><br><br>
    <v-row class="mx-auto">
        <v-col sm="5">
            <v-card 
            dark
            color="#C44E78"
            elevation="0"
            class="card"
            >
                <v-card-title class="d-flex justify-center">
                    <h1>Rp. 1000.0000</h1>
                </v-card-title>
                <v-card-text class="ml-6">
                    <span>Saldo saat ini</span>
                </v-card-text>
                <br>
                <v-btn 
                block 
                dark 
                x-large
                class="mt-3 radius-button"
                color="#B0466C"
                elevation="0"> 
                    Selengkapnya
                    <v-icon>mdi-chevron-right</v-icon> 
                </v-btn>
            </v-card>
        </v-col>
        <v-col sm="4" class="mr-12 pl-0">
            <v-card 
            dark 
            color="#4EC49A"
            elevation="0"
            class="card"
            >
                <v-card-title class="d-flex justify-center">
                    <h1>Rp. 1000.0000</h1>
                </v-card-title>
                <v-card-text class="ml-6">
                    <span>Saldo keluar</span>
                </v-card-text>
                <br>
                <v-btn 
                block 
                dark 
                x-large
                class="mt-3 radius-button"
                color="#37896C"
                elevation="0"> 
                    Selengkapnya 
                    <v-icon>mdi-chevron-right</v-icon>   
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
 </div>
</template>

<script>
export default {
    name: 'AdminPage',
    layout: "admin",
    // middleware: "admin",
}
</script>

<style scoped>
.card {
    position: absolute;
    width: 376px;
    height: 207px;
    border-radius: 10px;
}

h1 {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
}

span {
    /* font-family: 'Poppins'; */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    display: flex;
    align-items: center;
}

.radius-button {
    border-radius: 0px 0px 10px 10px;
}
</style>