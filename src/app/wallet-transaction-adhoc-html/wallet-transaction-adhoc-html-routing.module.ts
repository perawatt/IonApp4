import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionAdhocHTMLPage } from './wallet-transaction-adhoc-html.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionAdhocHTMLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionAdhocHTMLPageRoutingModule {}
