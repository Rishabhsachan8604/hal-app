import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpcComponent } from './ppc/ppc.component';
import { PpcDashboardComponent } from './ppc/ppc-dashboard/ppc-dashboard.component';
import { StoreComponent } from './store/store.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { QcComponent } from './qc/qc.component';
import { ProductionComponent } from './production/production.component';
import { FinanceComponent } from './finance/finance.component';
import { PurchaseDashboardComponent } from './purchase/purchase-dashboard/purchase-dashboard.component';
import { PartyMasterComponent } from './purchase/master/party-master/party-master.component';
import { CurrencyMasterComponent } from './purchase/master/currency-master/currency-master.component';
import { UnitMasterComponent } from './purchase/master/unit-master/unit-master.component';
import { MainPpcDashboardComponent } from './ppc/main-ppc-dashboard/main-ppc-dashboard.component';
import { AddPpcGroupComponent } from './ppc/master/add-ppc-group/add-ppc-group.component';
import { AddPpcSubGroupComponent } from './ppc/master/add-ppc-sub-group/add-ppc-sub-group.component';
import { ListPpcAllGroupsComponent } from './ppc/master/list-ppc-all-groups/list-ppc-all-groups.component';
import { AddPpcCategoryComponent } from './ppc/master/add-ppc-category/add-ppc-category.component';
import { AddPpcSubCategoryComponent } from './ppc/master/add-ppc-sub-category/add-ppc-sub-category.component';
import { AddPpcUnitComponent } from './ppc/master/add-ppc-unit/add-ppc-unit.component';
import { ListPpcAllCategoryComponent } from './ppc/master/list-ppc-all-category/list-ppc-all-category.component';
import { ListPpcAllUnitComponent } from './ppc/master/list-ppc-all-unit/list-ppc-all-unit.component';
import { PpcAddStockItemComponent } from './ppc/master/ppc-add-stock-item/ppc-add-stock-item.component';
import { PpcListStockItemComponent } from './ppc/master/ppc-list-stock-item/ppc-list-stock-item.component';
import { AddPpcBrandComponent } from './ppc/master/add-ppc-brand/add-ppc-brand.component';
import { ListPpcBrandComponent } from './ppc/master/list-ppc-brand/list-ppc-brand.component';
import { AddPpcSizeComponent } from './ppc/master/add-ppc-size/add-ppc-size.component';
import { ListPpcSizeComponent } from './ppc/master/list-ppc-size/list-ppc-size.component';
const routes: Routes = [{
    path: 'ppc',
    component: PpcComponent,
    data:{"name":"PPCLOGIN","activepage":"PPCLOGIN"}
  },
  {
    path: 'ppc',
    component:PpcDashboardComponent,
    children:[
      {
        path:'dashboard' , component:MainPpcDashboardComponent,data:{'name':'Dashboard','activepage':'PPCDASHBOARD'}
      },
      {
        path:'' , component:MainPpcDashboardComponent,data:{'name':'Dashboard','activepage':'PPCDASHBOARD'}
      },
      {
        path:'master/group' , component:AddPpcGroupComponent,data:{'name':'Add Group','activepage':'PPCMASTER'}
      },
      {
        path:'master/sub-group' , component:AddPpcSubGroupComponent,data:{'name':'Add Sub Group','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-group' , component:ListPpcAllGroupsComponent,data:{'name':'All Groups','activepage':'PPCMASTER'}
      },
      {
        path:'master/category' , component:AddPpcCategoryComponent,data:{'name':'Add Category','activepage':'PPCMASTER'}
      },
      {
        path:'master/sub-category' , component:AddPpcSubCategoryComponent,data:{'name':'Add Sub Category','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-category' , component:ListPpcAllCategoryComponent,data:{'name':'All Category','activepage':'PPCMASTER'}
      },
      {
        path:'master/unit' , component:AddPpcUnitComponent,data:{'name':'Unit','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-unit' , component:ListPpcAllUnitComponent,data:{'name':'All Unit','activepage':'PPCMASTER'}
      },
      {
        path:'master/add-stock-item' , component:PpcAddStockItemComponent,data:{'name':'Add Stock Item','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-stock-item' , component:PpcListStockItemComponent,data:{'name':'List Stock Item','activepage':'PPCMASTER'}
      },
      {
        path:'master/add-brand' , component:AddPpcBrandComponent,data:{'name':'Add Brand','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-brand' , component:ListPpcBrandComponent,data:{'name':'All Brand','activepage':'PPCMASTER'}
      },
      {
        path:'master/add-size' , component:AddPpcSizeComponent,data:{'name':'Add Size','activepage':'PPCMASTER'}
      },
      {
        path:'master/list-size' , component:ListPpcSizeComponent,data:{'name':'All Size','activepage':'PPCMASTER'}
      }
    ]
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    children:[
      {
        path:'dashboard' , component:PurchaseDashboardComponent,data:{"name":"Dashboard","activepage":"Dashboard"}
      },
      {
        path:'master/party-master' , component:PartyMasterComponent,data:{"name":"PARTY MASTER"}
      },
      {
        path:'master/currency-master' , component:CurrencyMasterComponent,data:{"name":"Currency Master"}
      },
      {
        path:'' , component:PurchaseDashboardComponent,data:{"name":"Dashboard"}
      },
      {
        path:'master/unit-master' , component:UnitMasterComponent,data:{"name":"Unit Master"}
      },
      
    ]
  },
  {
    path: 'qc',
    component: QcComponent,
  },
  {
    path: 'production',
    component: ProductionComponent,
  },
  {
    path: 'finance',
    component: FinanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
