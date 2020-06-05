import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantDepositPage } from './merchant-deposit.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantDepositPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantDepositPageRoutingModule {}
