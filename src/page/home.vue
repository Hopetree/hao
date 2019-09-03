<template>
    <div>
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :xs="20" :sm="16" :md="12" :lg="8" id="col-search">
                <component-search></component-search>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Search from "../components/search";
export default {
    components: {
        // 绑定组件标签
        "component-search": Search,
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#col-search {
    margin-top: 10%;
}
</style>>