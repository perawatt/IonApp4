import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EslipShopSelectPage } from './eslip-shop-select.page';

const routes: Routes = [
  {
    path: '',
    component: EslipShopSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EslipShopSelectPageRoutingModule {}
