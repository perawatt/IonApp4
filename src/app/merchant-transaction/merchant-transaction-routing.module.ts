import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTransactionPage } from './merchant-transaction.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTransactionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTransactionPageRoutingModule {}
