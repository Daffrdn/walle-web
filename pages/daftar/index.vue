<template>
<div class="bg">
    <br>
    <SignupForm/>
    <br>
</div>
</template>

<script>
export default{
    name: 'SignupPages',
    middleware: 'guest',
    data(){
        return {
        
        }
    }
}

</script>

<style scoped>
h3 {
  color: #4EC49A,
}
</style>