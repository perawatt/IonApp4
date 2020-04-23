import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionPpayTransferPage } from './wallet-transaction-ppay-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionPpayTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionPpayTransferPageRoutingModule {}
