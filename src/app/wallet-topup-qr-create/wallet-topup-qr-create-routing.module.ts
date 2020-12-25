import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupQrCreatePage } from './wallet-topup-qr-create.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupQrCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupQrCreatePageRoutingModule {}
