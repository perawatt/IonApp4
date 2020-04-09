import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionTopupPage } from './wallet-transaction-topup.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionTopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionTopupPageRoutingModule {}
