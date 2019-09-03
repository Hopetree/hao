<template>
    <el-form method="get" target="_blank" :action="scdata.url" id="search-component">
        <el-form-item>
            <el-autocomplete
                placeholder="请输入搜索内容"
                :name="scdata.key"
                v-model="sctext"
                clearable
                popper-class="suggestion-word-popper"
                :trigger-on-focus="false"
                :fetch-suggestions="querySearch"
                @select="handleSelect"
            >
                <el-dropdown slot="prepend" placement="bottom" @command="changedata">
                    <span class="el-dropdown-link">
                        <img :src="scdata.icon" alt="scdata.title" />
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item
                            v-for="each_type in sctypelist"
                            :key="each_type"
                            :command="each_type"
                        >
                            <img :src="$store.state.searchList[each_type].icon" :alt="each_type" />
                            {{ $store.state.searchList[each_type].title }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button slot="append" icon="el-icon-search" native-type="submit"></el-button>
            </el-autocomplete>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            // 从store里面读取数据并使用
            sctype: "",
            scdata: {},
            sctypelist: [],
            sctext: "",
            suggestion: []
        };
    },
    created() {
        // 设置默认值
        var default_type = this.$store.getters.searchTypes[0];
        this.sctype = default_type;
        this.sctypelist = this.$store.getters.searchTypes;
        this.scdata = this.$store.state.searchList[default_type];
    },
    methods: {
        // 选择表单变化的时候同步数据
        changedata: function(command) {
            this.sctype = command;
            this.scdata = this.$store.state.searchList[command];
        },
        // 推荐词触发
        querySearch: function(queryString, callback) {
            var results = [];
            this.$axios
                .get("/baidu/su", { params: { wd: queryString } })
                .then(ret => {
                    // 如果接口返回有值的话，正则匹配到的应该是一个列表，转为字典
                    var json_str = ret.data.match(/s:(\[.*\])}\);/);
                    if (json_str) {
                        var word_list = JSON.parse(json_str[1]);
                        for (var i = 0; i < word_list.length; i++) {
                            if (i < 6) {
                                results[i] = { value: word_list[i] };
                            }
                        }
                    }
                    callback(results);
                });
        },
        // 选择推荐词后的回调函数
        handleSelect: function(item) {
            // document.getElementById("search-component").submit()
            this.closePopler();
            let link =
                this.scdata.url + "?" + this.scdata.key + "=" + item.value;
            window.open(link);
        },
        // 关闭推荐词下拉框
        closePopler: function() {
            var dom = document.getElementsByClassName(
                "suggestion-word-popper"
            )[0];
            dom.style.display = "none";
        }
    }
};
</script>

<style scoped>
img {
    width: 1.2rem;
    margin: 0rem 0.2rem -0.2rem 0rem;
}
</style>
