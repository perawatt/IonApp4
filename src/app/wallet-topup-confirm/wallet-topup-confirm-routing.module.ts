import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupConfirmPage } from './wallet-topup-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupConfirmPageRoutingModule {}
