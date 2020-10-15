import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionTopupHTMLPage } from './wallet-transaction-topup-html.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionTopupHTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionTopupHTMLPageRoutingModule {}
