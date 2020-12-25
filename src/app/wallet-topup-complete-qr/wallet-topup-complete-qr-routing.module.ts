import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupCompleteQrPage } from './wallet-topup-complete-qr.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupCompleteQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupCompleteQrPageRoutingModule {}
