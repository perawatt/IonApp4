import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawSelectPage } from './wallet-withdraw-select.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawSelectPageRoutingModule {}
