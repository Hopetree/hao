<template>
  <el-row :gutter="20">
    <el-col
      :xs="8"
      :sm="6"
      :md="6"
      :lg="4"
      :xl="4"
      v-for="link in linkList"
      :key="link"
    >
      <a :href="link.url" target="_blank">
        <img :src="link.icon" :alt="link.title" />
        <span>{{ link.title }}</span>
      </a>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      linkList: [],
      category: "common",
    };
  },
  created() {
    var _link_list = this.$store.getters.baselinks;
    this.linkList = _link_list;
  },
};
</script>

<style scoped>
.el-row {
  display: flex;
  flex-wrap: wrap;
}
a {
  display: block;
  padding: 0.5rem 0 0.5rem 1rem;
  margin-bottom: 1rem;
  color: #444d58;
}
a:-webkit-any-link {
  color: none;
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  box-shadow: 0 2px 6px rgba(92, 88, 88, 0.175);
}
a,
a:focus,
a:hover {
  text-decoration: none;
}
img {
  width: 1.2rem;
  margin: 0 0.2rem -0.1rem 0;
}
</style>