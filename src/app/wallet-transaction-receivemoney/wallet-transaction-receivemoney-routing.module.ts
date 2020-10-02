import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionReceivemoneyPage } from './wallet-transaction-receivemoney.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionReceivemoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionReceivemoneyPageRoutingModule {}
