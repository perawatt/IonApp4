import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTransactionTransferBcPage } from './wallet-transaction-transfer-bc.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTransactionTransferBcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTransactionTransferBcPageRoutingModule {}
