<template>
    <div class="about">
        <h1>{{ msg }}</h1>
        <h2>About me</h2>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            msg: "Welcome to my Vue.js App"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
