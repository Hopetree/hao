<template>
    <div>
        <component-github-corner></component-github-corner>
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
        <el-row type="flex" class="row-bg" justify="center" id="row-soul">
            <el-col :xs="24" :sm="20" :md="16" :lg="14" :xl="12" id="col-soul">
                <component-soul></component-soul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Search from "../components/search";
import LinkBox from "../components/linkbox";
import Github_corner from "../components/github-corner";
import Soul from "../components/soul";

export default {
    components: {
        // 绑定组件标签
        "component-search": Search,
        "component-linkbox": LinkBox,
        "component-github-corner": Github_corner,
        "component-soul": Soul
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#col-search {
    margin-top: 5%;
}
#row-linkbox {
    padding-top: 2rem;
}
#col-linkbox {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    background: white;
    border-radius: 4px;
}
#row-soul {
    padding: 1rem .5rem;
}
#col-soul {
    text-align: center;
}
</style>>