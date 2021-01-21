import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupQrConfirmPage } from './wallet-topup-qr-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupQrConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupQrConfirmPageRoutingModule {}
