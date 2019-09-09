<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="20" :sm="16" :md="12" :lg="8" id="col-search">
                <component-search></component-search>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" id="row-linkbox">
            <el-col :xs="24" :sm="20" :md="16" :lg="14" :xl="12" id="col-linkbox">
                <component-linkbox></component-linkbox>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Search from "../components/search";
import LinkBox from "../components/linkbox";

export default {
    components: {
        // 绑定组件标签
        "component-search": Search,
        "component-linkbox": LinkBox
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#col-search {
    margin-top: 10%;
}
#row-linkbox {
    padding-top: 4rem;
}
#col-linkbox {
    padding: 1rem .5rem .5rem .5rem;
    background: white;
    border-radius: 4px;
}
</style>>