import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawConfirmPage } from './wallet-withdraw-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawConfirmPageRoutingModule {}
