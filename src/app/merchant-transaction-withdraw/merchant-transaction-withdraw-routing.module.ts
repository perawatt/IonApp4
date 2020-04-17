import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTransactionWithdrawPage } from './merchant-transaction-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTransactionWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTransactionWithdrawPageRoutingModule {}
