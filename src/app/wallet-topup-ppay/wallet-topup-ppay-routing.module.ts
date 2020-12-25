import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupPpayPage } from './wallet-topup-ppay.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupPpayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupPpayPageRoutingModule {}
