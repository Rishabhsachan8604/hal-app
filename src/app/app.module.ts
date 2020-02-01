import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PpcComponent } from './ppc/ppc.component';
import { StoreComponent } from './store/store.component';
import { StoreNavbarComponent } from './store/store-navbar/store-navbar.component';
import { StoreSidebarComponent } from './store/store-sidebar/store-sidebar.component';
import { StoreDashboardComponent } from './store/store-dashboard/store-dashboard.component';
import { StoreRightSidebarComponent } from './store/store-right-sidebar/store-right-sidebar.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseNavbarComponent } from './purchase/purchase-navbar/purchase-navbar.component';
import { PurchaseDashboardComponent } from './purchase/purchase-dashboard/purchase-dashboard.component';
import { PurchaseSidebarComponent } from './purchase/purchase-sidebar/purchase-sidebar.component';
import { PurchaseRightSidebarComponent } from './purchase/purchase-right-sidebar/purchase-right-sidebar.component';
import { QcComponent } from './qc/qc.component';
import { QcDashboardComponent } from './qc/qc-dashboard/qc-dashboard.component';
import { QcNavbarComponent } from './qc/qc-navbar/qc-navbar.component';
import { QcSidebarComponent } from './qc/qc-sidebar/qc-sidebar.component';
import { QcRightSidebarComponent } from './qc/qc-right-sidebar/qc-right-sidebar.component';
import { ProductionComponent } from './production/production.component';
import { ProductionNavbarComponent } from './production/production-navbar/production-navbar.component';
import { ProductionSidebarComponent } from './production/production-sidebar/production-sidebar.component';
import { ProductionDashboardComponent } from './production/production-dashboard/production-dashboard.component';
import { ProductionRightSidebarComponent } from './production/production-right-sidebar/production-right-sidebar.component';
import { FinanceComponent } from './finance/finance.component';
import { FinanceNavbarComponent } from './finance/finance-navbar/finance-navbar.component';
import { FinanceDashboardComponent } from './finance/finance-dashboard/finance-dashboard.component';
import { FinanceSidebarComponent } from './finance/finance-sidebar/finance-sidebar.component';
import { FinanceRightSidebarComponent } from './finance/finance-right-sidebar/finance-right-sidebar.component';
import { PartyMasterComponent } from './purchase/master/party-master/party-master.component';
import { CurrencyMasterComponent } from './purchase/master/currency-master/currency-master.component';
import { UnitMasterComponent } from './purchase/master/unit-master/unit-master.component';
import { PoGroupComponent } from './purchase/po-group/po-group.component';
import { TreeNavbarComponent } from './tree-navbar/tree-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PpcLoginComponent } from './ppc/ppc-login/ppc-login.component';
import { PpcDashboardComponent } from './ppc/ppc-dashboard/ppc-dashboard.component';
import { PpcLeftsidebarComponent } from './ppc/ppc-leftsidebar/ppc-leftsidebar.component';
import { PpcRightsidebarComponent } from './ppc/ppc-rightsidebar/ppc-rightsidebar.component';
import { PpcNavbarComponent } from './ppc/ppc-navbar/ppc-navbar.component';
import { AddPpcGroupComponent } from './ppc/master/add-ppc-group/add-ppc-group.component';
import { MainPpcDashboardComponent } from './ppc/main-ppc-dashboard/main-ppc-dashboard.component';
import { AddPpcSubGroupComponent } from './ppc/master/add-ppc-sub-group/add-ppc-sub-group.component';
import { ListPpcAllGroupsComponent } from './ppc/master/list-ppc-all-groups/list-ppc-all-groups.component';
import { AddPpcCategoryComponent } from './ppc/master/add-ppc-category/add-ppc-category.component';
import { AddPpcSubCategoryComponent } from './ppc/master/add-ppc-sub-category/add-ppc-sub-category.component';
import { AddPpcUnitComponent } from './ppc/master/add-ppc-unit/add-ppc-unit.component';
import { ListPpcAllUnitComponent } from './ppc/master/list-ppc-all-unit/list-ppc-all-unit.component';
import { ListPpcAllCategoryComponent } from './ppc/master/list-ppc-all-category/list-ppc-all-category.component';
import { PpcAddStockItemComponent } from './ppc/master/ppc-add-stock-item/ppc-add-stock-item.component';
import { PpcListStockItemComponent } from './ppc/master/ppc-list-stock-item/ppc-list-stock-item.component';
import { AddPpcBrandComponent } from './ppc/master/add-ppc-brand/add-ppc-brand.component';
import { ListPpcBrandComponent } from './ppc/master/list-ppc-brand/list-ppc-brand.component';
import { AddPpcSizeComponent } from './ppc/master/add-ppc-size/add-ppc-size.component';
import { ListPpcSizeComponent } from './ppc/master/list-ppc-size/list-ppc-size.component';

@NgModule({
  declarations: [
    AppComponent,
    PpcComponent,
    StoreComponent,
    StoreNavbarComponent,
    StoreSidebarComponent,
    StoreDashboardComponent,
    StoreRightSidebarComponent,
    PurchaseComponent,
    PurchaseNavbarComponent,
    PurchaseDashboardComponent,
    PurchaseSidebarComponent,
    PurchaseRightSidebarComponent,
    QcComponent,
    QcDashboardComponent,
    QcNavbarComponent,
    QcSidebarComponent,
    QcRightSidebarComponent,
    ProductionComponent,
    ProductionNavbarComponent,
    ProductionSidebarComponent,
    ProductionDashboardComponent,
    ProductionRightSidebarComponent,
    FinanceComponent,
    FinanceNavbarComponent,
    FinanceDashboardComponent,
    FinanceSidebarComponent,
    FinanceRightSidebarComponent,
    PartyMasterComponent,
    CurrencyMasterComponent,
    UnitMasterComponent,
    PoGroupComponent,
    TreeNavbarComponent,
    FooterComponent,
    PpcLoginComponent,
    PpcDashboardComponent,
    PpcLeftsidebarComponent,
    PpcRightsidebarComponent,
    PpcNavbarComponent,
    AddPpcGroupComponent,
    MainPpcDashboardComponent,
    AddPpcSubGroupComponent,
    ListPpcAllGroupsComponent,
    AddPpcCategoryComponent,
    ListPpcAllCategoryComponent,
    ListPpcAllUnitComponent,
    AddPpcSubCategoryComponent,
    AddPpcUnitComponent,
    PpcAddStockItemComponent,
    PpcListStockItemComponent,
    AddPpcBrandComponent,
    ListPpcBrandComponent,
    AddPpcSizeComponent,
    ListPpcSizeComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
