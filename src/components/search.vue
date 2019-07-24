<template>
    <div id="search-component">
        <form
            role="search"
            method="get"
            id="searchform"
            :action="$store.state.searchList[search_type].url"
        >
            <select v-model="search_type">
                <option v-for="type in $store.getters.searchTypes" :key="type" :value="type">{{ type }}</option>
            </select>
            <input type="search" :name="$store.state.searchList[search_type].key" placeholder="搜索" />
            <input type="submit" value="Search" />
            <!-- /input-group -->
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search_type: ""
        };
    },
    created() {
        this.search_type = this.$store.getters.searchTypes[0]
    }
};
</script>

<style scoped>
</style>
