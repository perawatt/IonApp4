import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletWithdrawBankaccountConfirmPage } from './wallet-withdraw-bankaccount-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletWithdrawBankaccountConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletWithdrawBankaccountConfirmPageRoutingModule {}
