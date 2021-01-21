import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawPage } from './wallet-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawPageRoutingModule {}
