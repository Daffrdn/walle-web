<template>
<div class="bg">
    <br>
    <LoginForm/>
    <br>
</div>
</template>

<script>
export default{
    name: 'LoginPages',
    middleware: 'guest',
    data(){
        return {
        
        }
    }
}

</script>

<style>
</style>