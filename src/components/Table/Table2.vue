<template>
  <div class="table_box">
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-s-order"></span>
      表格2
    </div>

    <el-table :data="list" border :summary-method="getSummaries" show-summary style="width: 100%;" stripe height="260">
      <el-table-column label="序号" width="80px" align='center'>
        <template slot-scope="scope">
          <span>{{ scope.$index +1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="firstNum" label="币种" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.firstNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.firstNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="firstNum" label="初始" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.firstNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.firstNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="secondNum" label="公元2019年12月22日" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.secondNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.secondNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="thirdNum" label="12月27日-配平后" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.thirdNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.thirdNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="fourthNum" label="公元2020年1月7日" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.fourthNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.fourthNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="fourthNum" label="01月07日-配平后" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.fourthNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.fourthNum"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align='center'>
        <template slot-scope="scope">
          <el-button v-if="!scope.row.isEgdit" type="primary" size="small" @click='edit(scope.$index,scope.row)' icon="el-icon-edit" circle></el-button>
          <el-button v-if="scope.row.isEgdit" type="success" size="small" @click='editSuccess(scope.$index,scope.row)' icon="el-icon-check" circle></el-button>
          <el-button @click.native.prevent="deleteItem(scope.$index, list)" type="danger" size="small" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [{
                    id: 1,
                    fruitSort: 1,
                    firstNum: 10,
                    secondNum: 3,
                    thirdNum: 4,
                    fourthNum: 6,
                }, {
                    id: 2,
                    fruitSort: 2,
                    firstNum: 7,
                    secondNum: 6,
                    thirdNum: 8,
                    fourthNum: 2,
                }, {
                    id: 3,
                    fruitSort: 3,
                    firstNum: 5,
                    secondNum: 6,
                    thirdNum: 8,
                    fourthNum: 9,
                }, {
                    id: 4,
                    fruitSort: 3,
                    firstNum: 10,
                    secondNum: 3,
                    thirdNum: 4,
                    fourthNum: 6,
                }],
            }
        },
        methods: {
            //删除数据
            deleteItem(index, list) {
                list.splice(index, 1);
            },
            //编辑数据
            edit(index, row) {
                this.$set(row, 'isEgdit', true)
            },
            //编辑成功
            editSuccess(index, row) {
                this.$set(row, 'isEgdit', false)
            },

        }

    }

</script>
