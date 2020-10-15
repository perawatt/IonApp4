import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionPPayPaymentHTMLPage } from './wallet-transaction-ppay-payment-html.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionPPayPaymentHTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionPPayPaymentHTMLPageRoutingModule {}
