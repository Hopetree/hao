<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <h2>Home page</h2>
        <component-search></component-search>
    </div>
</template>

<script>
import Search from "../components/search";
export default {
    data() {
        return {
            msg: "Welcome to my Vue.js App, home page"
        };
    },
    components: {
        // 绑定组件标签
        "component-search": Search
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
