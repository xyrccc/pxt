<template>
  <div class="table_box">
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-s-order"></span>
      表格2
    </div>

    <el-table :data="data" style="width: 100%;" stripe height="460">

      <el-table-column prop="exchangeName" label="交易所名称" align='center'
                       :filters="[{ text: 'abit', value: 'abit' }
                       ,{ text: 'ceo', value: 'ceo' }
                       ,{ text: 'binance', value: 'binance' }
                       ,{ text: 'bkex', value: 'bkex' }]"
                       :filter-method="filterExchangeName"
                       filter-placement="bottom-end">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.exchangeName}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.exchangeName"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="symbol" label="币种" align='center'
                       :filters="[{ text: 'wdc_usdt', value: 'wdc_usdt' }
                       ,{ text: 'wdc_qc', value: 'wdc_qc' }
                       ,{ text: 'usdt_qc', value: 'usdt_qc' }
                       ,{ text: 'btc_usdt', value: 'btc_usdt' }
                       ,{ text: 'eth_usdt', value: 'eth_usdt' }
                       ,{ text: 'eos_usdt', value: 'eos_usdt' }
                       ,{ text: 'eth_btc', value: 'eos_btc' }
                       ,{ text: 'eos_btc', value: 'eos_btc' }
                       ,{ text: 'at_usdt', value: 'at_usdt' }]"
                       :filter-method="filterSymbol"
                       filter-placement="bottom-end">
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.symbol}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.symbol"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="asset" label="资产名" align='center'
                       :filters="[{ text: 'BTC', value: 'BTC' }
                       ,{ text: 'USDT', value: 'USDT' }
                       ,{ text: 'ETH', value: 'ETH' }
                       ,{ text: 'EOS', value: 'EOS' }
                       ,{ text: 'WDC', value: 'WDC' }
                       ,{ text: 'AT', value: 'AT' }]"
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
            this.$axios
                .get('/api/data/getAccountBalanceInfo')
                .then((res) => {
                    let jsonObj=res.data;
                    console.log(jsonObj)
                    this.code=jsonObj.code;
                    this.message=jsonObj.message;
                    if(this.code==200){
                        this.data=jsonObj.data;
                    }
                    else {
                        this.$alert(this.message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
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
            //筛选
            filterAsset(value,row){
                return row.asset === value;
            },
            filterExchangeName(value,row){
                return row.exchangeName === value;
            },
            filterSymbol(value,row){
                return row.symbol === value;
            }
        }

    }

</script>
