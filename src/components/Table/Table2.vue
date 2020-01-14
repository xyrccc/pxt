<template>
  <div class="table_box">
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-s-order"></span>
      表格2
    </div>

    <el-table :data="data" style="width: 100%;" stripe height="360">
      <el-table-column prop="exchangeName" label="交易所名称" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.exchangeName}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.exchangeName"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="symbol" label="币种" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.symbol}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.symbol"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="asset" label="资产名" align='center'
                       :filters="[{ text: 'USDT', value: 'USDT' }, { text: 'WDC', value: 'WDC' }]"
                       :filter-method="filterAsset"
                       filter-placement="bottom-end">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.asset}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.asset"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="all" label="总数" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.all}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.all"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="available" label="可用" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.available}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.available"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="frozen" label="冻结" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.frozen}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.frozen"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" align='center'>
        <template slot-scope="scope">
          <el-button v-if="!scope.row.isEgdit" type="primary" size="small" @click='edit(scope.$index,scope.row)' icon="el-icon-edit" circle></el-button>
          <el-button v-if="scope.row.isEgdit" type="success" size="small" @click='editSuccess(scope.$index,scope.row)' icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>{{data}}

  </div>
</template>
<script>
    export default {
        data() {
            return {
                code:'',
                message:'',
                data:[],
                total:'',
                size:'',
            }
        },

        mounted(){
            let jsonObj={
                "code": 200,
                "message": "OK",
                "data": [
                    {
                        "id": 48,
                        "exchangeName": "abit",
                        "symbol": "wdc_usdt",
                        "asset": "USDT",
                        "all": 299999.99999999,
                        "available": 292106.43078544,
                        "frozen": 7893.56921455
                    },
                    {
                        "id": 49,
                        "exchangeName": "abit",
                        "symbol": "wdc_usdt",
                        "asset": "WDC",
                        "all": 2000000.00003263,
                        "available": 1600259.86815647,
                        "frozen": 399740.13187616
                    }
                ],
                "total": 2,
                "size": 2
            }
            this.data=jsonObj.data;
        },
        methods: {
            //编辑数据
            edit(index, row) {
                this.$set(row, 'isEgdit', true)
            },
            //编辑成功
            editSuccess(index, row) {
                this.$set(row, 'isEgdit', false)
                console.log(index)
                console.log(row)
            },
            filterAsset(value,row){
                return row.asset === value;
            }
        }

    }

</script>
