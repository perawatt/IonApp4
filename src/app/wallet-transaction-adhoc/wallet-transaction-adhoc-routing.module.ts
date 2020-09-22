import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionAdhocPage } from './wallet-transaction-adhoc.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionAdhocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionAdhocPageRoutingModule {}
