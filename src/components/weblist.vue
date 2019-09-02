<template>
    <p>{{ test_str }}</p>
</template>

<script>
export default {
    data() {
        return {
            web_list: [],
            test_str: "test context"
        };
    },
    created() {
        this.$axios.get("/apis/su", { params: { wd: "python" } }).then(ret => {
            console.log(ret);
            this.test_str = ret.data
        });
    }
};
</script>

<style scoped>
</style>