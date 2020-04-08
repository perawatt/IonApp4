import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupDetailByMtmPage } from './wallet-topup-detail-by-mtm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupDetailByMtmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupDetailByMtmPageRoutingModule {}
