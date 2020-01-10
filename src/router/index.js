import Vue from 'vue'
import Router from 'vue-router'
import ShipMian from '@/components/ShipMian'
import Table1 from "../components/Table/Table1";
import Table2 from "../components/Table/Table2";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShipMian',
      component: ShipMian,
      children:[
        {
          path: '/Table/Table1',
          name: 'Table1',
          component: Table1,
        },
        {
          path: '/Table/Table2',
          name: 'Table2',
          component: Table2,
        },
      ]
    }
  ]
})
