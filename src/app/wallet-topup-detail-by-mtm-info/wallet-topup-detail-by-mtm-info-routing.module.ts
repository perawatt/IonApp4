import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupDetailByMtmInfoPage } from './wallet-topup-detail-by-mtm-info.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupDetailByMtmInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupDetailByMtmInfoPageRoutingModule {}
