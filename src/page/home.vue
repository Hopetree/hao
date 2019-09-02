<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="20" :sm="16" :md="12" :lg="8" :xl="6" id="col-search">
                <component-search></component-search>
            </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="24" :sm="20" :md="12">
                <component-weblist></component-weblist>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Search from "../components/search";
import WebList from "../components/weblist";
export default {
    components: {
        // 绑定组件标签
        "component-search": Search,
        "component-weblist": WebList
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#col-search {
    margin-top: 10%;
}
</style>>