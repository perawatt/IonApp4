import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupHowtoBankDetailPage } from './wallet-topup-howto-bank-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupHowtoBankDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupHowtoBankDetailPageRoutingModule {}
