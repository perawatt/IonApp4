import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionPpayPaymentPage } from './wallet-transaction-ppay-payment.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionPpayPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionPpayPaymentPageRoutingModule {}
