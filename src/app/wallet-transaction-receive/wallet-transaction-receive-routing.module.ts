import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionReceivePage } from './wallet-transaction-receive.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionReceivePageRoutingModule {}
