import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawDetailByMtmPage } from './wallet-withdraw-detail-by-mtm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawDetailByMtmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawDetailByMtmPageRoutingModule {}
