import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupDetailPage } from './wallet-topup-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupDetailPageRoutingModule {}
