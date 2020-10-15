import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionWithdrawHTMLPage } from './wallet-transaction-withdraw-html.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionWithdrawHTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionWithdrawHTMLPageRoutingModule {}
