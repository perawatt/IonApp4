import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupPpayConfirmPage } from './wallet-topup-ppay-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupPpayConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupPpayConfirmPageRoutingModule {}
