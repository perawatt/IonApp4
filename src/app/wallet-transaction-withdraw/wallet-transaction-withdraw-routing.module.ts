import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionWithdrawPage } from './wallet-transaction-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionWithdrawPageRoutingModule {}
