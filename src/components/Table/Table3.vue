<template>
  <div class="table_box">
    <div class="title" style="font-size: 23px;padding-left: 20px; margin-bottom: 20px;float:left">
      <span class="el-icon-s-order"></span>
      表格3（币种数据）
    </div>

    <el-table :data="data" style="width: 100%;" stripe height="460">

      <el-table-column prop="symbol" label="做市币种" align='center'
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

      <el-table-column prop="makerMaxNum" label="做市单子最大数量" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.makerMaxNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.makerMaxNum"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="makerMinNum" label="做市单次最小数量" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.makerMinNum}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.makerMinNum"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="compensateProfit" label="做市单每笔间隔" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.compensateProfit}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.compensateProfit"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="priceDecimal" label="价格精度" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.priceDecimal}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.priceDecimal"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="amountDecimal" label="数量精度" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.amountDecimal}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.amountDecimal"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="priceGap" label="做市盘口间距" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.priceGap}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.priceGap"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="makerOrderPriceGap" label="做市单每笔补充间距" align='center'>
        <template slot-scope="scope">
          <span v-if="!scope.row.isEgdit">{{scope.row.makerOrderPriceGap}}</span>
          <el-input v-if="scope.row.isEgdit" v-model="scope.row.makerOrderPriceGap"></el-input>
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
            }
        },

        mounted(){
            this.$axios
                .get('/api/data/getSymbolDataInfo')
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
                this.$axios
                    .post('/api/data/editSymbolData',row)
                    .then((res) => {
                        console.log(res.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            //筛选
            filterSymbol(value,row){
                return row.symbol === value;
            }
        }

    }

</script>
