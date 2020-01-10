<template>
  <div>

    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-s-order"></span>
      表格1
    </div>
    <br>
    <el-card style="margin-top:50px">

      <br>

      <el-table ref="multipleTable" :data="handleList.slice((currentPage-1)*pageSize,currentPage*pageSize)" tooltip-effect="dark" style="width: 100%">
        <el-table-column  type="index" label="序号" width="50"></el-table-column>
        <el-table-column  prop="" label="币种"></el-table-column>
        <el-table-column  prop="" label="初始"></el-table-column>
        <el-table-column  prop="" label="公元2019年12月22日"></el-table-column>
        <el-table-column  prop="" label="12月27日-配平后"></el-table-column>
        <el-table-column  prop="" label="公元2020年1月7日"></el-table-column>
        <el-table-column  prop="" label="01月07日-配平后"></el-table-column>
      </el-table>
      <div style="margin-top:20px">
        <el-pagination
          small
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="handleList.length">
        </el-pagination>
      </div>

    </el-card>

    <router-view></router-view>


  </div>
</template>

<script>

    export default {
        data()
        {
            return{
                handleList: [],
                // 当前页
                currentPage: 1,
                // 每页多少条
                pageSize: 10,
            }
        },
        methods: {
            // 每页多少条
            handleSizeChange(val) {
                this.pageSize = val;
                this.currentPage = 1;
            },
            // 当前页
            handleCurrentChange(val) {
                this.currentPage = val;
            },

        }
    }
</script>


