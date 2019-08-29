<template>
    <div class="home">
        <component-search></component-search>
    </div>
</template>

<script>
import Search from "../components/search";
export default {
    components: {
        // 绑定组件标签
        "component-search": Search
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
    margin-top: 180px;
}
#search-component .el-input-group__prepend {
    background-color: white;
    padding: 0 5px 0 20px;
    cursor: pointer;
}
#search-component .el-input__inner {
    border-left: 0;
    padding: 0 15px 0 10px;
}
#search-component .el-input__inner:focus {
    border-color: #DCDFE6;
}
#search-component .el-input__inner:hover {
    border-color: #DCDFE6;
}
#search-component .el-icon--right {
    margin-left: 0;
}
</style>
