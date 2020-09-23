import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawCompletedPage } from './wallet-withdraw-completed.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawCompletedPageRoutingModule {}
