import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletTopupBankaccountConfirmPage } from './wallet-topup-bankaccount-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: WalletTopupBankaccountConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletTopupBankaccountConfirmPageRoutingModule {}
