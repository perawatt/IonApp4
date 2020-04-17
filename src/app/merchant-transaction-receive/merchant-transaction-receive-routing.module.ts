import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerchantTransactionReceivePage } from './merchant-transaction-receive.page';

const routes: Routes = [
  {
    path: '',
    component: MerchantTransactionReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerchantTransactionReceivePageRoutingModule {}
