import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTransactionTopupPage } from './merchant-transaction-topup.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTransactionTopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTransactionTopupPageRoutingModule {}
