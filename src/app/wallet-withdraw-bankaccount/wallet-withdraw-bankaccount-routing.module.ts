import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawBankaccountPage } from './wallet-withdraw-bankaccount.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawBankaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawBankaccountPageRoutingModule {}
