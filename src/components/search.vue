<template>
    <div id="search-component">
        <h3>搜索组件</h3>
        <form role="search" method="get" id="searchform" :action="scdata.url" target="_blank">
            <select v-model="sctype" @change="changedata(sctype)">
                <option v-for="type in sctypelist" :key="type" :value="type">{{ type }}</option>
            </select>
            <input type="search" :name="scdata.key" placeholder="搜索" />
            <input type="submit" value="Search" />
            <!-- /input-group -->
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 从store里面读取数据并使用
            sctype: "",
            sctypelist: [],
            scdata: {}
        };
    },
    created() {
        // 设置默认值
        var default_type = this.$store.getters.searchTypes[0];
        this.sctype = default_type
        this.sctypelist = this.$store.getters.searchTypes;
        this.scdata = this.$store.state.searchList[default_type];
    },
    mounted: {},
    methods: {
        // 选择表单变化的时候同步数据
        changedata: function(key) {
            this.scdata = this.$store.state.searchList[key];
        }
    }
};
</script>

<style scoped>
</style>
