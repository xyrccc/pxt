<template>
  <div>
    <el-container class="Main">
      <el-button
        icon="el-icon-s-unfold"
        style="position: fixed;left: 0;top: 0;height: 60px;width: 80px;font-size: x-large;"
        @click="table = true"
      ></el-button>

      <el-drawer :visible.sync="table" direction="ltr" size="20%">
        <h2>各类币值走势分析表</h2>
        <el-menu router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>表格选择</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/Table/Table1">表格1</el-menu-item>
              <el-menu-item index="/Table/Table2">表格2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-drawer>

      <el-container>
        <el-header style="width:100vw" class="icon">
          <div style="font-size: 33px">
            各类币值走势分析表
          </div>
        </el-header>
        <el-main style="width:100vw">
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
        table:false
    };
  },

  methods: {

  },

  mounted() {
      this.$router.push({name:'Table1'})
  }
};
</script>
<style scoped>
.Main {
  width: 100vw;
  height: 100vh;
}
h2 {
  color: #909399;
}

.icon {
  font-size: 40px;
}
td {
  width: 200px;
}
.el-header {
  background-color: #e4e7ed;
}
.el-main {
  background-color: #dcdfe6;
}
</style>
