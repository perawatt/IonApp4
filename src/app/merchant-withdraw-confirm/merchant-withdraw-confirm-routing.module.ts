import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantWithdrawConfirmPage } from './merchant-withdraw-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantWithdrawConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantWithdrawConfirmPageRoutingModule {}
