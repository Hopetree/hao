<template>
    <div>
        <div class="souls">
            <span>{{mysoul}}</span>
        </div>
        <el-button type="primary" size="small" round @click="updateSoul">再来一碗</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mysoul: "",
        };
    },
    created() {
        var soulList = this.$store.state.soulList;
        this.mysoul = soulList[Math.floor(Math.random() * soulList.length)];
    },
    methods: {
        updateSoul: function () {
            var soulList = this.$store.state.soulList;
            this.mysoul = soulList[Math.floor(Math.random() * soulList.length)];
        },
    },
};
</script>

<style scoped>
div.souls {
    padding: 2rem 0;
    font-size: 1.4rem;
}
</style>