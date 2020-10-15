import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionReceivemoneyHTMLPage } from './wallet-transaction-receivemoney-html.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionReceivemoneyHTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionReceivemoneyHTMLPageRoutingModule {}
