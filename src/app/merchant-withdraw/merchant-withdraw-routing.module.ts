import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantWithdrawPage } from './merchant-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantWithdrawPageRoutingModule {}
