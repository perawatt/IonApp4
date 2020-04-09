import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawDetailPage } from './wallet-withdraw-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawDetailPageRoutingModule {}
